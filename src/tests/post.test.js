import { render, screen } from '@testing-library/react';
import Post from '../Components/Post';

test("renders the count value to 0",()=>{
    render(<Post/>);
    expect(screen.getByTestId('countid')).toHaveTextContent(0)
})