import { TextField } from "@mui/material";

const TodoForm = () => {
    return (
        <form>
            <TextField
                variant="outlined"
                placeholder="Add new todo"
                margin="normal"
            />
        </form>
    )
}

export default TodoForm;