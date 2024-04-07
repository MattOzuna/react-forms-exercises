import {renderer} from 'react-test-renderer';
import Todo from './Todo';

it('should render', () => {
    renderer.create(<Todo />)
})