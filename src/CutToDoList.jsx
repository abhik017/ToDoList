import React from "react";
const CutToDoList = (props) => {
    return(
        <>
            <div className="cut_todo_style">
                <button className="removeCutList" onClick={ () => {
                    props.onSelect(props.id,2,props.text);
                }}></button>
                <li className="cutList"> {props.text} </li>
                <button className="uncut" onClick={ () => {
                    props.onSelect(props.id,-1,props.text);
                }}>UNDONE</button>
            </div>
        </>
    );
};
export default CutToDoList;