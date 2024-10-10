import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../index";
const ReactTestRenderer = require('react-test-renderer');

describe(
    "Counter",()=>{
       it("should increment Counter",()=>{
        render (<Counter/>);
        const counter = screen.getByTestId("counter")
        const incrementBtn = screen.getByTestId("increment");
        expect(counter).toHaveTextContent("4")
        // interact with elements
        const incrementCounter = jest.fn();
        fireEvent.click(incrementBtn);
        expect(incrementCounter).toHaveBeenCalledTimes(0);
        expect(counter).toHaveTextContent("5")
       })
    }
);
describe("Counter Snapshot", () => {
    it("should match DOM Snapshot", () => {
      const tree = ReactTestRenderer.create(<Counter />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })

  describe('Counter Field',()=>{
    it("Yes it is Password Field",()=>{
        render(<Counter/>);
        const passfield = screen.getByTestId("passfield")
        const checkboxfield = screen.getByTestId("checkbox")
        expect(passfield).toHaveAttribute('type',"text")
        expect(checkboxfield).not.toBeChecked()
    })
    
  })

