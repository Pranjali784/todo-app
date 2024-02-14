import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoDetails from "./ToDoDetails";
import { Grid } from "@mui/material";
import { fetchTodos } from "./api";
import "./App.css";

const App = () => {
    // State variables
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
  
    // Fetch todos on component mount
    useEffect(() => {
      const fetchTodoData = async () => {
        const todos = await fetchTodos();
        setTodos(todos);
      };
  
      fetchTodoData();
    }, []);
  
    // Handle todo click
    const handleTodoClick = (todoId) => {
      const selected = todos.find((todo) => todo.id === todoId);
      setSelectedTodo(selected);
    };
  
    // Handle todo deletion
    const handleDelete = (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
      setSelectedTodo(null);
    };
  
    // Handle marking a todo as completed
    // const handleMarkCompleted = (todoId) => {
    //   const updatedTodos = todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return { ...todo, completed: true };
    //     }
    //     return todo;
    //   });
    //   setTodos(updatedTodos);
    // };

    const handleMarkCompleted = (todoId) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: true};
        }
        return todo;
      });
      console.log(updatedTodos);
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
          method: 'PATCH',
          body: JSON.stringify({completed: true }),
          headers: {
          'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to patch resource');
          }
         return response.json();
        })
        .then(json => console.log(json)) 
        .catch(error => console.error('Error:', error));
      }
      
  
    // Render the main component
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TodoList todos={todos} onTodoClick={handleTodoClick} />
        </Grid>
        <Grid item xs={6} className="detailsSection">
          {!selectedTodo && <h2>Select a To-Do to modify it</h2>}
          {selectedTodo && (
            <TodoDetails
              todo={selectedTodo}
              onDelete={handleDelete}
              onMarkCompleted={handleMarkCompleted}
            />
          )}
        </Grid>
      </Grid>
    );
  };
  
  export default App;