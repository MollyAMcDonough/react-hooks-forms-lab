import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onFormChange, onItemFormSubmit}) {
  const [formData, setFormData] = useState({name: "", category: "Produce"})

  function handleFormChange(event) {
    console.log("event form target name:",event.target.name);
    console.log("event form target value: ", event.target.value);
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(formData)
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }
    onItemFormSubmit(newItem);
  }
  

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange}>
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
