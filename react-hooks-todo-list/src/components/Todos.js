import React from "react";

function Todos({ todo, index, completeTodo, deleteTodo }) {
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };
  return (
    <div style={getStyle()} className="todo">
      <div>
        <input type="checkbox" onChange={() => completeTodo(index)} />{" "}
        {todo.text}
        <button onClick={() => deleteTodo(index)} style={btnStyle}>
          x
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default Todos;
