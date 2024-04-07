import NewTodoForm from "./NewTodoForm.js";
import "@testing-library/jest-dom";
import { render, asFragment } from "@testing-library/react";

it("should render", () => {
  render(<NewTodoForm />);
});

it("should match Snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
