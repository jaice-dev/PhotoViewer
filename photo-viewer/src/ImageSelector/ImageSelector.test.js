import React from "react";
import { generateImage } from 'jsdom-screenshot'
import {render} from "@testing-library/react";
import ImageSelector from "./ImageSelector";
import "../setupTests"

it('has no visual regressions', async () => {
    
    render(<ImageSelector/>);
    const screenshot = await generateImage()
    expect(screenshot).toMatchImageSnapshot();
});