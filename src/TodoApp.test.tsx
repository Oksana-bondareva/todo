import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('TodoApp', () => {
  test('adds a new todo', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const todoText = screen.getByText('New Todo');
    expect(todoText).toHaveStyle('text-decoration: line-through');
    expect(todoText).toHaveStyle('opacity: 0.5');
  });

  test('deletes a todo', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const deleteButton = screen.getByLabelText('Delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });

  test('filters active todos', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Completed Todo' } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(screen.queryByText('Completed Todo')).not.toBeInTheDocument();
  });

  test('counts remaining uncompleted todos', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'First Todo' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Second Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('2 items left')).toBeInTheDocument();

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    expect(screen.getByText('1 items left')).toBeInTheDocument();

    fireEvent.click(checkboxes[1]);

    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });
});