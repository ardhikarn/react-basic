import React from "react";
import Todo from "./Todo";

export default function Todos() {
  const todos = [
    {
      text: "Belajar Props",
    },
    {
      text: "Belajar React Hooks",
    },
    {
      text: "Belajar React State",
    },
    {
      text: "Belajar React",
    },
    {
      text: "Belajar React COY",
    },
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo key={todo.text} text={todo.text} />;
      })}
    </section>
  );
}
