import React from 'react';
import { Offcanvas,Stack} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import{formatCurrency} from '../../utilities/formatCurrency';
import CartItem from './CartItem.js';

function  Cart(props) {
  
  const{closeCart}= props
  return (
   <div>
      <Offcanvas  show={props.isOpen} onHide={closeCart} placement="end" >
         <Offcanvas.Header closeButton>
             <Offcanvas.Title>Cart</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
          <Stack gap={3}>
          {props.cart.map((item, index) =>(
            <CartItem key={index} {...item}  storeItems={props.storeItems}
                                             
                                              cart={props.cart}
                                              removeItem={props.removeItem} />
          ))}
         {props.cart.length < 1 ? <p style={{textAlign: 'center', marginTop: "50px",fontSize:"20px"}}>No items added to the cart</p> : null}
          <div className="ms-auto  fw-bold fs-5">
           total{" "}
           {formatCurrency(props.cart.reduce((total, cartItem) => {
               const storeItem = props.storeItems.find(item => item.id === cartItem.id);
                return total + (storeItem?.price ||0 )* cartItem.quantity}, 0))}
   
          </div>
          
          </Stack>
           <Stack>
            <Button variant="outline-light" 
                    style={{backgroundColor: "SandyBrown", marginTop: "20px"}} 
                    size="sm">
          checkout
        </Button>
            </Stack>
         </Offcanvas.Body>
      </Offcanvas>
   
   
   </div>
  );
}

export default Cart;

       
         
         
         
         
         
         
         
         
         
         
         
         

