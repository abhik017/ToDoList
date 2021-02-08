import React from "react";
const ToDoList = (props) => {
    return(
        <>
            <div className="todo_style">
                <button className="remove" onClick={ () => {
                    props.onSelect(props.id,0,props.text);
                }}></button>
                <li className="list" > {props.text} </li>
                <button className="cut" onClick={ () => {
                    props.onSelect(props.id,1,props.text);
                }}>DONE</button>
            </div>
        </>
        );
};
export default ToDoList;