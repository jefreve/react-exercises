import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Homework", "Project", "Night out", "Workout", "Play guitar"],
  };

  addTodo = (event) => {
    const input = event.target.parentNode.querySelector('[name="inputField"]');
    const inputValue = input.value;

    input.value = "";

    const newItemsArray = this.state.items;

    newItemsArray.push(inputValue);

    this.setState({ items: newItemsArray });
  };

  resetItems = () => {
    this.setState({ items: [] });
  };

  removeItem = (event) => {
    const index = event.target.name;
    const newArray = this.state.items;

    newArray.splice(index, 1);

    this.setState({ items: newArray });
  };

  render() {
    return (
      <div style={{ paddingLeft: "8px" }}>
        {this.props.render(
          this.state.items,
          this.removeItem,
          this.addTodo,
          this.resetItems
        )}
      </div>
    );
  }
}

// {this.state.items.map((todo, index) => (
//   <li key={todo.value + "-" + index}>
//     {`Todo N.${index + 1}: ${todo}`}
//     <button name={index} onClick={this.removeItem}>
//       Remove
//     </button>
//   </li>
// ))}
