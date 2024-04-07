import { render } from "@testing-library/react"
import BoxList from "./BoxList"
import '@testing-library/jest-dom';

it("should render", () => {
    render(<BoxList />)
})