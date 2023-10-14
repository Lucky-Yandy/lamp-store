import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
       //console.log(defaultCart);
   }

   const[cart,setCart]=useState(defaultCart);
   const[isOpen, setIsOpen]=useState(false);
   const[searchBox,setSearchBox]=useState('');
   const[ordering,setOrdering]=useState("low to high");
  
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
        console.log("this is newcart",newCart)
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
	     console.log("after delete this is newcart",newCart);
	}
    
   function removeItem(id){
     setCart(newCart =>{
       
        return newCart.filter(cartItem => cartItem.id !==id)
     }) 
    
   }
   
   
   const closeCart= () => setIsOpen(false);
   const openCart= () => setIsOpen(true);
    
    /*working on the searchBar*/
   function searchValue(ev){
           setSearchBox(ev.target.value);
           console.log("searbar is working",searchBox)
   }
   
   /*working on the filter*/
   function onDropDown(value){
      setOrdering(value);
      console.log("hi is this working",value);
   }
   if (ordering === "low"){
      storeItems.sort((a, b) => a.price - b.price);
   
   }else{
   
      storeItems.sort((a, b) => b.price - a.price);
   }
   
   return (
   
    <div>
      <Navbar   storeItems={storeItems}
                closeCart={closeCart}
                openCart={openCart}
                cart={cart}
                searchValue = {searchValue} //fuction 
                onDropDown ={onDropDown}  
       />
      <Container className="mb-4">
          <Store storeItems={storeItems}
                 cart={cart}
                 searchBox={searchBox}
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





 
           
	    
	    
	    
	    
	    
	    
	    
	
       
       
       
        
