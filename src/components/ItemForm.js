import React,{useState} from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {


  const [newItemCategory,setNewItemCategory]=useState("Produce");
  const [newItemName,setNewItemName]=useState("");


  function handleNewItemCategory(event){
    setNewItemCategory(event.target.value);
  }

  function handleNewItemName(event){
    setNewItemName(event.target.value);
  }


  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: newItemName,
    category: newItemCategory,
  }; 
  


  return (
    <form className="NewItem" onSubmit={()=>onItemFormSubmit(newItem)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName} value={newItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItemCategory} value={newItemCategory}>
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
