import { render, fireEvent } from "@testing-library/react";
import BoxList from "../box-maker-components/BoxList";
import "@testing-library/jest-dom";

it("should render", () => {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a box to the page", () => {
  const { getByLabelText, queryByText } = render(<BoxList />);

  const colorInput = getByLabelText("Color:");
  const WidthInput = getByLabelText("Width:");
  const HeightInput = getByLabelText("Height:");
  const formButton = queryByText("Submit");

  expect(queryByText("X")).not.toBeInTheDocument();

  fireEvent.change(colorInput, { target: { value: "White" } });
  fireEvent.change(WidthInput, { target: { value: "100" } });
  fireEvent.change(HeightInput, { target: { value: "100" } });
  fireEvent.click(formButton);

  expect(queryByText("X")).toBeInTheDocument();
});

it("should remove Box by clicking X button", () => {
  const { getByLabelText, queryByText } = render(<BoxList />);

  const colorInput = getByLabelText("Color:");
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const formInput = queryByText("Submit");

  fireEvent.change(colorInput, { target: { value: "White" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.click(formInput);

  expect(queryByText("X")).toBeInTheDocument();

  const removeButton = queryByText("X");
  fireEvent.click(removeButton);

  expect(queryByText("X")).not.toBeInTheDocument();
});
