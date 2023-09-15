import React from 'react';
import {Container, Button,Navbar as NavbarBs,FormControl} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import myStoreImage from '../../images/mystoreimage.png';
import './Navbar.css';
import DropdownFilter from '../DropDownFilter/DropDownFilter.js';
function Navbar(props){  
    const totalQuantity = props.storeItems.reduce((total, item) => {
        const quantity =  props.cart.find(cartitem => cartitem.id === item.id)?.quantity ||0;
        return total + quantity;
    }, 0);
    
    const{openCart}=props
  
    return(
	
	<NavbarBs sticky="top"  className="shadow-sm mb-3" style={{height:"auto",backgroundColor: "White", }}>
	   <Container className="resbonsive"> 
               <NavbarBs.Brand >
                 <h1 style={{ display: "flex", alignItems: "center" }}> 
                  <img src={myStoreImage} alt="my-store-image" width="50" height="50" />
                  <span style={{marginLeft:"10px"}}>Illuminati Lamps </span>
                  </h1>
               </NavbarBs.Brand >  
             <div className="myDivToSearchAndFilter" >  
              <NavbarBs.Text  >
	         <FormControl style={{width: '100%', borderColor: 'orange'}}
	           placeholder="search a product" 
	           className="m-auto" 
	           onChange={(ev) => props.searchValue(ev)}/>
	      </NavbarBs.Text>
	       
               <NavbarBs.Brand>
                       <DropdownFilter  onChanged ={props.onDropDown}  />
              </NavbarBs.Brand>
              </div>
	       <Button  onClick={openCart}
	            style={{width:"3rem", height:"3rem",position:"relative",borderColor: 'orange' }}
	            variant="outline-dark"
	            className="rounded-circle btn-hover-orange">
	          <FaShoppingCart/>
	          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center "
	           style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute",
	            bottom:"0",right:"0",transform:"translate(25%, 25%)",}}>{totalQuantity}</div>
	         </Button>
	      
	      
	   </Container>
         </NavbarBs>
   );



}

export default Navbar;










/*<Nav.Link to="/buttom" as={NavLink}> Cart</Nav.Link>*/


/*return(
	
	 <NavbarBs sticky="top"  className="shadow-sm mb-3" style={{height:"120px",backgroundColor: "White", }}>
	   <Container >
	    <Nav className="justify-content-between align-items-center">
             <div className="d-flex align-items-center">
                <img src={myStoreImage} alt="my-store-image" width="50" height="50" />
                <h1 style={{ marginLeft: '10px', marginRight:"30px"}}>Lamps</h1>
             </div>
	     <div><Searchbar /></div>
	     <div><DropdownFilter /></div>
	    </Nav>
	     <Nav.Link to="/cart" as={NavLink}>
	       <Button  onClick={openCart}
	            style={{width:"3rem", height:"3rem",position:"relative",borderColor: 'orange' }}
	            variant="outline-dark"
	            className="rounded-circle btn-hover-orange">
	          <FaShoppingCart/>
	          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center " style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom:"0",right:"0",transform:"translate(25%, 25%)",}}>{totalQuantity}</div>
	         </Button>
	       </Nav.Link>
	       
	   </Container>
         </NavbarBs>
   );

*/
