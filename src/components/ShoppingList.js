import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState("");
  const [newData,setNewData]=useState(items)


 
  function onItemFormSubmit(obj){
  
     setNewData([...newData,obj]);

  }

  function onSearchChange(event){
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsFiltered=itemsToDisplay.filter(item=>{
    if(search===""){
      return true;
    }
    else if(item.name.indexOf(search)!== -1){
      return true;
    }

    
  })


  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
