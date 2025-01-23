import React from 'react';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { ListItem, Checkbox, ListItemText, IconButton, Box } from '@mui/material';

interface TodoItemProps {
    todo: { text: string; completed: boolean };
    index: number;
    toggleTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, toggleTodo, deleteTodo }) => (
    <ListItem key={index.toString()} onClick={() => toggleTodo(index)}>
        <Checkbox tabIndex={-1} disableRipple checked={todo.completed} />
        <ListItemText primary={todo.text} />
        <Box>
            <IconButton aria-label="Delete" onClick={() => deleteTodo(index)}>
                <DeleteSweepIcon />
            </IconButton>
        </Box>
    </ListItem>
);

export default TodoItem;
