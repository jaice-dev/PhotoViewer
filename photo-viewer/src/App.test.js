import React from "react";
import App from './App';
import {generateImage} from "jsdom-screenshot";
import {render} from "@testing-library/react";

it('has no visual regressions', async () => {
  render(<App/>);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
