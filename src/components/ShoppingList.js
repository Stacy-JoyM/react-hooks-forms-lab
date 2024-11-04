import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter"; // Assuming you have a Filter component
import Item from "./Item"; // Assuming you have an Item component
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  
  function onItemFormSubmit(newItem) {

    setItems((items)=> [...items, newItem]); // Update the items state

  }

  // Filter items based on search and selected category
  const itemsToDisplay = items
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => (selectedCategory === "All" ? true : item.category === selectedCategory));

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit} 
      />
      <Filter 
        handleCategoryChange={handleCategoryChange} 
        onSearchChange={onSearchChange} 
        search={search} 
      />
      <ul className="Items">
        {itemsToDisplay.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
