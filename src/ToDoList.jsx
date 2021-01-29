import React from "react";



const ToDoList = (props) => {
    return(
        <>
            <div className="todo_style">
                <button className="remove" onClick={ () => {
                    props.onSelect(props.id);
                }}></button>
                <li className="list" > {props.text} </li>
            </div>
        </>
        );
};

export default ToDoList;