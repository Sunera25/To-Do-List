import React, {useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);


  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        addItem={addItem}
      />
      <div>
        <ul>
          {items.map((item, index) =>
            <ToDoItem
              key={index}
              id={index}
              text={item}
              setItems={setItems}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
