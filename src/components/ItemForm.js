import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [category, setCategory] = useState("Produce")
  const [name, setName] = useState("")

  function handleNameChange(event) {
    setName(event.target.value);

  }

  function handleCategoryAdd(event) {
    setCategory(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault;
  
    
        // Create the new item here
      const newItem = {
        id: uuid(), // Generate a unique ID for the item
        name: name,
        category: category
      };


      // Call the onItemFormSubmit prop with the new item
      onItemFormSubmit(newItem); 
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleNameChange} 
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          onChange={handleCategoryAdd} 
          value={category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
