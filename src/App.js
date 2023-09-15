import React from "react";
import { TodoList } from "./todoList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, removeItem, addTodo, resetItems) => {
            const ulContent = items.map((todo, index) => (
              <li key={todo.value + "-" + index}>
                {`Todo N.${index + 1}: ${todo}`}
                <button name={index} onClick={removeItem}>
                  Remove
                </button>
              </li>
            ));

            const ulStyle = {
              listStyle: "none",
              paddingInlineStart: "0px",
            };

            return (
              <>
                <ul style={ulStyle}>{ulContent}</ul>
                <input name="inputField" type="text" />
                <button onClick={addTodo}>Add Todo</button>
                <button onClick={resetItems}>Reset</button>
              </>
            );
          }}
        ></TodoList>
      </div>
    );
  }
}
