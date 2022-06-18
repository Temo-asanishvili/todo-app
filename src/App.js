import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  function addItem() {
    if (!newItem) {
      alert("enter item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="container">
      <div className="app-container">
        <div>
          <h1 className="header">Todo App</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Todo..."
            className="task-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="button-add" onClick={() => addItem()}>
            Add
          </button>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    ➖
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
