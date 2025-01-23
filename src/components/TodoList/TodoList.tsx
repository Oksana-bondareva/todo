import { List } from '@mui/material';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

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
