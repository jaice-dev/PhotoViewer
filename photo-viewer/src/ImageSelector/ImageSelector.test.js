import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import ImageSelector from "./ImageSelector";
import {imageUrls} from "./ImageUrls";
import TestRenderer from "react-test-renderer"

test('clicked image passes index to parent', () => {
    let testIndex = null
    const sendDataToParent = (index) => {
        testIndex = index;
    }
    
    render(<ImageSelector sendDataToParent={sendDataToParent} selectedIndex={testIndex} imageUrls={imageUrls}/>)
    fireEvent.click(screen.getByAltText("3"))
    expect(testIndex).toBe(3)
})

test('selected image gets border', () => {
    render(<ImageSelector  selectedIndex={4} imageUrls={imageUrls}/>)
    const selected = screen.getByAltText("4")
    expect(selected.className).toContain("selected")
})

test('clicking on an image selects it and deselects previous image',  () => {
    let testIndex = 0
    const sendDataToParent = (index) => {
        testIndex = index;
    }
    
    const test = render(<ImageSelector sendDataToParent={sendDataToParent} selectedIndex={testIndex} imageUrls={imageUrls}/>)
    
    const initial = screen.getByAltText(0)
    const clicked = screen.getByAltText("5")
    fireEvent.click(clicked)
    
    render(<ImageSelector sendDataToParent={sendDataToParent} selectedIndex={testIndex} imageUrls={imageUrls}/>, test)

    expect(initial.className).not.toContain("selected")
    expect(clicked.className).toContain("selected")
})