import React, { useState } from 'react';
import ToDoList from "./ToDoList"
import CutToDoList from "./CutToDoList"

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [cutItems, setCutItems] = useState([]);

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

  const cutTheItem = (id, n, text) => {
    if(n===0) {
      setItems( (oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        });
      });
    }
    else if(n===2) {
      setCutItems( (oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        });
      });
    }
    else if(n===1) {
      setCutItems( (oldItems) => {
        return [...oldItems, text];
      });
      setItems( (oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        });
      });
    }
    else if(n===-1) {
      setItems( (oldItems) => {
        return [...oldItems, text];
      });
      setCutItems( (oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        });
      });
    }
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add your Tasks!" onChange={itemEvent} value={inputList}/>
        <button className="add" onClick={listOfItems}>+</button>
        <ol className="orderedList">
          {items.map( (itemval, index) => {
            return <ToDoList text={itemval} key={index} id={index} onSelect={cutTheItem}/>
          })}
        </ol>
        <ol>
          {cutItems.map( (itemval, index) => {
              return <CutToDoList text={itemval} key={index} id={index} onSelect={cutTheItem}/>
            })}
        </ol>
      </div>
    </div>
  );
};

export default App;