import React, { useMemo } from "react";

export function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((person) => person.age > 18);
  }, [list]);

  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <h2>People of age:</h2>
      <ul
        style={{
          listStyle: "none",
          paddingInlineStart: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredList.map((person, index) => {
          return (
            <div>
              <hr />
              <li name={person} key={`${person}-${index}`}>
                <div>Id: {person.id}</div>
                <h3>Name: {person.name}</h3>
                <p>Age: {person.age}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
