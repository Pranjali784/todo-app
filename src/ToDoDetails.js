import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./App.css";
  
const TodoDetails = ({ todo, onDelete, onMarkCompleted }) => {
  return (
        <Box className = "todoDetails">
        <Typography variant="h5"><strong>Title: </strong>{todo.title}</Typography>
        <Typography><strong>User Id: </strong>{todo.userId}</Typography>
        <Button variant="contained" color="error" style={{ margin:"10px" }} onClick={() => onDelete(todo.id)}>Delete</Button>
        <Button variant="contained" color="success" onClick={() => onMarkCompleted(todo.id)}>Mark Completed</Button>
      </Box>
  );
};

export default TodoDetails;