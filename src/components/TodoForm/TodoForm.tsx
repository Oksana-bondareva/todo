import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { TodoFormProps } from "../../types/types";

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <TextField
                        variant="outlined"
                        placeholder="Add new todo"
                        margin="normal"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!value.trim()}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default TodoForm;
