import { render, asFragment } from "@testing-library/react"
import TodoList from "./TodoList"
import '@testing-library/jest-dom';


it("should render", ()=>{
    render(<TodoList />);
})

it('should match snapshot', () =>{
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})