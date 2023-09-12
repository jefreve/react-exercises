import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Homework", "Project", "Night out", "Workout", "Play guitar"],
  };

  addTodo = (event) => {
    const input = event.target.parentNode.querySelector('[name="inputField"]');
    const inputValue = input.value;

    this.clearTodo(input);

    const newItemsArray = this.state.items;

    newItemsArray.push(inputValue);

    this.setState({ items: newItemsArray });
  };

  clearTodo = (input) => {
    input.value = "";
  };

  resetItems = () => {
    this.setState({ items: [] });
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
        <button onClick={this.resetItems}>Reset</button>
      </div>
    );
  }
}
