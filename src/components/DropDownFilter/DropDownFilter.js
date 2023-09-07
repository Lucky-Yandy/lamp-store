import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownFilter = () => {
  const [selectedItems, setSelectedItems] = useState([]); // To keep track of selected items

  // Define a list of options for the filter
  const filterOptions = [
  
    { id: 2, label: 'price hight to low' },
    { id: 3, label: 'price low to hight' },
    { id: 1, label: 'stars *****' },
  
    // Add more options as needed
  ];

  // Function to handle checkbox changes
  const handleCheckboxChange = (option) => {
    if (selectedItems.includes(option.id)) {
      setSelectedItems(selectedItems.filter((item) => item !== option.id));
    } else {
      setSelectedItems([...selectedItems, option.id]);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="gray" id="dropdown-filter"  style={{ borderColor: 'orange', borderRadius: '50px', width:"150px"}} >
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu >
        {filterOptions.map((option) => (
          <Dropdown.Item key={option.id}>
            <input
              type="checkbox"
              id={`option-${option.id}`}
              checked={selectedItems.includes(option.id)}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={`option-${option.id}`}>{option.label}</label>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownFilter;

