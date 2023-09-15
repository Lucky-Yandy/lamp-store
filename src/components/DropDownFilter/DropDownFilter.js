import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownFilter = (props) => {
   const[filterChecked,setFilterChecked]=useState({
     lowToHigh:false,
     hightToLow:true,
   });
   
   function handleLowToHighChange(ev){
	      setFilterChecked({
	          lowToHigh: true,
	          hightToLow:false,
	      });
	      props.onChanged("low");
    }
   function handleHightToLowChange(ev){
	      setFilterChecked({
	       hightToLow: true,
	       lowToHigh:false,
	      });
	      props.onChanged("high");
     }
   return (
     <Dropdown>
      <Dropdown.Toggle variant="gray" id="dropdown-filter"  
                       style={{ borderColor: 'orange', borderRadius: '50px', 
                       width:"150px", marginLeft:"30px"}} >
           Filter
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown>
          <label >
	    <input
		 type="radio"
		  name="drowdown"
		  checked={filterChecked.lowToHigh}
		  onClick={handleLowToHighChange}
		  /> lowToHigh
          </label >
       </Dropdown>
        <Dropdown>
          <label >
	    <input
		    type="radio"
		    name="drowdown"
		    checked={filterChecked.hightToLow}
		    onClick={ handleHightToLowChange}
		  />hightToLow
           </label>
         </Dropdown>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownFilter;


/*  {filterOptions.map((option) => (
          <Dropdown.Item key={option.id}>
            <input
              type="checkbox"
              id={`option-${option.id}`}
              checked={selectedItems.includes(option.id)}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={`option-${option.id}`}>{option.label}</label>
          </Dropdown.Item>
        ))}*/
