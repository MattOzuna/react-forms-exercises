import { render, asFragment, fireEvent } from "@testing-library/react";
import TodoList from "../Todo-components/TodoList";
import "@testing-library/jest-dom";

it("should render", () => {
  render(<TodoList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new Todo item to list", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  expect(queryByText("Test Task")).not.toBeInTheDocument();

  const taskInput = getByLabelText("New Task:");
  const addButton = queryByText("Add");

  fireEvent.change(taskInput, { target: { value: "Test Task" } });
  fireEvent.click(addButton);

  expect(queryByText("Test Task")).toBeInTheDocument();
});

it('should remove a todo item with the "X" button', () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const taskInput = getByLabelText("New Task:");
  const addButton = queryByText("Add");

  fireEvent.change(taskInput, { target: { value: "Test Task" } });
  fireEvent.click(addButton);

  const removeButton = queryByText("X");

  expect(queryByText("Test Task")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();

  fireEvent.click(removeButton);

  expect(queryByText("Test Task")).not.toBeInTheDocument();
  expect(queryByText("X")).not.toBeInTheDocument();
});
