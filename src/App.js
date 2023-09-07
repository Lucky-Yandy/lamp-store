import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//import {Row, Col} from 'react-bootstrap';
//import {
 // BrowserRouter as Router,
//  Routes,
//  Route,
//  Link,
//} from "react-router-dom";
import {Container} from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart.js';
import Store from './components/Store/Store.js';
import Navbar from './components/Navbar/Navbar.js';
import storeItems from './data/items.json';

function App() {  
   const startingCartString = localStorage.getItem('cart');
   let defaultCart = [];
   if (startingCartString) {
       defaultCart = JSON.parse(startingCartString)
       console.log(defaultCart);
   }

   const[cart,setCart]=useState(defaultCart);
   const[isOpen, setIsOpen]=useState(false);
   
    
   function addToCard (id){ 
    
     const newCart = cart.slice();
     const existingItem = newCart.find(item => item.id === id); 
     if (!existingItem) { // No existing item
            newCart.push({
                id: id,
                quantity: 1,
            });
        } else {
            existingItem.quantity = existingItem.quantity + 1;
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
 }
    
    function decreaseCartQuantity (id){ 
       
	const newCart = cart.slice();
	const existingItem = newCart.find(item => item.id === id);

	if (existingItem) {
            if (existingItem.quantity === 1) {
	        newCart.splice(newCart.indexOf(existingItem), 1); 
	    } else {
		existingItem.quantity -= 1; 
	     }
	    setCart(newCart); 
	    localStorage.setItem('cart', JSON.stringify(newCart)); 
	    }
	}
    
   function removeItem(id){
     setCart(newCart =>{
        return newCart.filter(cartItem => cartItem.id !==id)
     })  
   }
   
   const closeCart= () => setIsOpen(false);
   const openCart= () => setIsOpen(true);
   
   
   
   return (
   
    <div>
      <Navbar  
               storeItems={storeItems}
                closeCart={closeCart}
                openCart={openCart}
                cart={cart}
                
               />
      <Container className="mb-4">
       
          <Store 
                  storeItems={storeItems}
                  cart={cart}
                  
                  increaseGotClicked={addToCard}
                  decreaseCartQuantity={decreaseCartQuantity} 
                  removeItem={removeItem} />
           <Cart 
                  storeItems={storeItems}
                  
                  cart={cart}
                  isOpen={isOpen}
                  closeCart={closeCart}
                  removeItem={removeItem} />
       
      </Container>
    </div>
  );
}

export default App;





 
           
	    
	    
	    
	    
	    
	    
	    
	
       
       
       
        
