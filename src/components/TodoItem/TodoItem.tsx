import React from 'react';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { ListItem, Checkbox, ListItemText, IconButton, Box } from '@mui/material';
import { TodoItemProps } from '../../types/types';

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, toggleTodo, deleteTodo }) => {
    const textStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.5 : 1,
        fontSize: '1.6em',
    };

    return (
        <ListItem key={index.toString()} onClick={() => toggleTodo(index)}>
            <Checkbox
                tabIndex={-1}
                disableRipple
                checked={todo.completed}
                onClick={() => toggleTodo(index)}
            />
            <ListItemText
                primary={<span style={textStyle}>{todo.value}</span>}
            />
            <Box>
                <IconButton
                    aria-label="Delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteTodo(index);
                    }}
                >
                    <DeleteSweepIcon />
                </IconButton>
            </Box>
        </ListItem>
    )
};

export default TodoItem;
