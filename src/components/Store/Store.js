import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import{formatCurrency} from '../../utilities/formatCurrency';
    

function Store(props){
  const searchResults = props.storeItems.filter((val) => {
        if (props.searchBox.trim() === "") {
	    // If the search box is empty or contains only spaces, keep all items.
	    return true;
	} else if (val.name.toLowerCase().includes(props.searchBox.toLowerCase())) {
	    // Return true only if the item's name matches the search criteria.
	   return true;
        } else {
	    // Return false for items that don't match the search criteria.
	  return false;
	  }
	      }); 
  if (searchResults.length < 1) {
     return (<div  style={{textAlign: 'center', marginTop: "50px",fontSize:"50px"}} >No item found</div>);
     
  }
  return(
     <div>  
       <Row md={2} xs={1} lg={3} className="g-3">
       
        { searchResults.map((item)=>(
		  <Col key={item.id}> 
		    <div>
		   <Card className="h-100" >
		      <Card.Img variant="top" 
	                src={item.image} 
	                height="200px" 
	                style={{ objectFit: "cover" }} />
	      <Card.Body className="d-flex flex-column"> 
		<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
		  <span className="fs-5">{item.name}</span>
		  <span className="ms-2 text-muted">{formatCurrency(item.price)}</span>
		</Card.Title>
		<div className="mt-auto">
                  { (props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0) === 0 ? (
			  <Button className="w-100" 
				  style={{backgroundColor:"SandyBrown", border: "none"}} 
				  onClick={() => props.increaseGotClicked(item.id)}>Add To Cart
			  </Button>):
		    (<div className="d-flex align-items-center flex-row  justify-content-between" 
			   style={{gap:".5rem"}}> 
			    <div className="d-flex align-items-center"> 
			    <Button  onClick={() =>props.decreaseCartQuantity(item.id)}
				     style={{margin:'0 10px',backgroundColor: "Lavender",
				     border: "none",color:"orange"}}>
				     -
			    </Button>
			   <div className="fs-10">
			      { props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0}
			   </div>
			   <Button  onClick={() =>props.increaseGotClicked(item.id)}
				    style={{margin: '0 10px',backgroundColor: "Lavender",
				    border: "none",color:"orange"}}
			    >+</Button>
			   </div>
			  <div>  
			  <Button style={{backgroundColor:"SandyBrown",border: "none"}}  
				  onClick={() =>props.removeItem(item.id)}>Remove</Button>
			  </div>
			  </div>)

	               }
	              
		
		</div>
	      </Card.Body>
	    </Card>
	 </div>
          </Col>))
        
        }
        
       
       </Row>
   </div>
   );
  


}


export default Store;
