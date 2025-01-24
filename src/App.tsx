import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import { Todo } from './types/types';
import { Box, Typography } from '@mui/material';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const addTodo = (value: string) => {
        const newTodo: Todo = { value, completed: false };
        setTodos([...todos, newTodo]);
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const hasTodos = todos.length > 0;

    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleTodo = (index: number) => {
        const newTodos = todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const remainingTodosCount = todos.filter(todo => !todo.completed).length;

    return (
        <>
            <Header />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
                <Typography px={2}>
                    {remainingTodosCount} items left
                </Typography>
                <TodoFilter setFilter={setFilter} hasTodos={hasTodos} clearTodos={clearTodos} />
            </Box>
        </>
    )
}

export default App
