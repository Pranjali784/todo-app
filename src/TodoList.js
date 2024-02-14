import React from "react";
import { List, ListItem, Typography } from "@mui/material";

const TodoList = ({ todos, onTodoClick }) => {
return (
      <List className = "todoList">
      {todos.map((todo) => (
        <ListItem key={todo.id} onClick={() => onTodoClick(todo.id)}>
          <Typography variant="h6">{todo.title}</Typography>
        </ListItem>
      ))}
    </List>
);
};

export default TodoList;



