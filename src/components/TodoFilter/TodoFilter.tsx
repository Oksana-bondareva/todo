import { Button } from "@mui/material";
import { TodoFilterProps } from "../../types/types";

const TodoFilter: React.FC<TodoFilterProps> = ({ setFilter, clearTodos, hasTodos }) => (
    <div>
        <Button onClick={() => setFilter('all')} disabled={!hasTodos}>All</Button>
        <Button onClick={() => setFilter('active')} disabled={!hasTodos}>Active</Button>
        <Button onClick={() => setFilter('completed')} disabled={!hasTodos}>Completed</Button>
        <Button onClick={clearTodos} disabled={!hasTodos}>Clear All</Button>
    </div>
);

export default TodoFilter;