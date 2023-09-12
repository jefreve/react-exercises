import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Homework", "Project", "Night out", "Workout", "Play guitar"],
  };

  addTodo = (event) => {
    const value = event.target.parentNode.querySelector(
      '[name="inputField"]'
    ).value;
    const newItemsArray = this.state.items;
    newItemsArray.push(value);
    this.setState({ items: newItemsArray });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((todo, index) => (
            <li key={todo.value + "-" + index}>{`Todo N.${
              index + 1
            }: ${todo}`}</li>
          ))}
        </ul>
        <input name="inputField" type="text" />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}
