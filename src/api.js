import axios from "axios";
const fetchTodos = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const todos = response.data;
        return todos;
    } catch (error) {
        console.error("Error fetching todos: ", error);
        return [];
    }
};

export { fetchTodos } ;
