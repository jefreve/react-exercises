import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const languages = {
  en: ["Delete", "Add Todo", "Reset"],
  it: ["Rimuovi", "Aggiungi Compito", "Resetta"],
};

export function TodoList({ initialArray = [] }) {
  const [items, setItems] = useState(initialArray);
  const [languages, setLanguages] = useState();
  const value = useContext(LanguageContext);

  function deleteTodo(event) {
    const index = event.target.name;

    items.splice(index, 1);
    const newItems = [...items];

    setItems(newItems);
  }

  function addTodo(event) {
    const input = event.target.parentElement.querySelector(
      "[name='inputField']"
    );

    const value = input.value;

    if (value) {
      const newItems = [...items, value];
      setItems(newItems);
      input.value = "";
    }
  }

  function resetItems() {
    setItems([]);
  }

  return (
    <value.Consumer>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={item + "-" + index + 1} id={index}>
                {`Todo N.${index + 1}: ${item}`}
                <button onClick={deleteTodo} name={index}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <input name="inputField" type="text" />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={resetItems}>Reset</button>
      </div>
    </value.Consumer>
  );
}

// export class TodoList extends React.Component {
//   state = {
//     items: ["Homework", "Project", "Night out", "Workout", "Play guitar"],
//   };

//   addTodo = (event) => {
//     const input = event.target.parentNode.querySelector('[name="inputField"]');
//     const inputValue = input.value;

//     this.clearTodo(input);

//     const newItemsArray = this.state.items;

//     newItemsArray.push(inputValue);

//     this.setState({ items: newItemsArray });
//   };

//   clearTodo = (input) => {
//     input.value = "";
//   };

//   resetItems = () => {
//     this.setState({ items: [] });
//   };

//   removeItem = (event) => {
//     const index = event.target.name;
//     const newArray = this.state.items;

//     newArray.splice(index, 1);

//     this.setState({ items: newArray });
//   };

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.items.map((todo, index) => (
//             <li key={todo.value + "-" + index}>
//               {`Todo N.${index + 1}: ${todo}`}
//               <button name={index} onClick={this.removeItem}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//         <input name="inputField" type="text" />
//         <button onClick={this.addTodo}>Add Todo</button>
//         <button onClick={this.resetItems}>Reset</button>
//       </div>
//     );
//   }
// }
