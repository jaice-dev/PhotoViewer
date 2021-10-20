import { render, screen} from "@testing-library/react";
import {imageUrls} from "../ImageSelector/ImageUrls";
import React from "react";
import PhotoViewer from "./PhotoViewer";
import ImageSelector from "../ImageSelector/ImageSelector";

test('should render without error', () => {
    render(<PhotoViewer />)
})

test('check ImageViewer updates to selected image', () => {
    render(<PhotoViewer src={imageUrls[3]}/>)
    const image = screen.getByAltText("Photo being viewed")
    // put testId on things - screen.getByTestId
    expect(image.src).toBe("https://picsum.photos/id/604/1600/900.jpg")
})