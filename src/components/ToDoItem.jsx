import React, { useState } from 'react';


function ToDoItem(props) {

    function removeItem() {
        props.setItems(prevItems => {
            return prevItems.filter((item, index) =>
                index != props.id);
        });
    }
    return (
        <div>
            <li onClick={removeItem}>
                {props.text}</li>
        </div>
    );
}

export default ToDoItem;