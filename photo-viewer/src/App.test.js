import React from "react";
import renderer from "react-test-renderer"
import App from './App';
import ImageSelector from "./ImageSelector/ImageSelector";
import {render} from "@testing-library/react";

test('snapshot test to check if any changes', () => {
  const tree = renderer
      .create(<App/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});

