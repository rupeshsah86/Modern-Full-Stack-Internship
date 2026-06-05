"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            getTodos {
              id
              todo
              completed
              user {
                id
                firstName
                lastName
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    console.log("Data:", data);
    setTodos(data.data.getTodos);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Todo Items:</h1>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          {/* //<h2>Todos:{todo.todo}</h2> */}
          <h2>ID:{todo.id}</h2>
          <h2>Firstname:{todo.user.firstName}</h2>
          <h2>LastName:{todo.user.lastName}</h2>
           <h2>Todos:{todo.todo}</h2>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
