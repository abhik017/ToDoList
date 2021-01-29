import React, { useState } from 'react';
import ToDoList from "./ToDoList"

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if(inputList !== "")
    setItems( (oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const cutTheItem = (id) => {
    setItems( (oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add your Tasks!" onChange={itemEvent} value={inputList}/>
        <button className="add" onClick={listOfItems}>+</button>
        <ol>
          {items.map( (itemval, index) => {
            return <ToDoList text={itemval} key={index} id={index} onSelect={cutTheItem}/>
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;