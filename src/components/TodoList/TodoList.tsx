import { List } from '@mui/material';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoListProps } from '../../types/types';

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
    <List>
        {todos.map((todo, index) => (
            <TodoItem
                key={index}
                index={index}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        ))}
    </List>
);

export default TodoList;
