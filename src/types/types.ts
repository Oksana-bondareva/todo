export interface Todo {
    value: string;
    completed: boolean;
}

export interface TodoFormProps {
    addTodo: (text: string) => void;
}

export interface TodoItemProps {
    todo: Todo;
    index: number;
    toggleTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

export interface TodoFilterProps {
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    clearTodos: () => void;
    hasTodos: boolean;
}