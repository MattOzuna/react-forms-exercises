import { render, asFragment } from '@testing-library/react';
import Todo from './Todo';
import '@testing-library/jest-dom';

it('should render', () => {
    render(<Todo 
        task="test task 1"
        id="0"
    />)
})

it('should match snapshot', () => {
    const { asFragment } = render(
        <Todo 
            task="test task 1"
            id="0"
        />)
    expect(asFragment()).toMatchSnapshot()
})