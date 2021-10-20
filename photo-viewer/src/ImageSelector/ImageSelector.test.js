import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import ImageSelector from "./ImageSelector";
import {imageUrls} from "./ImageUrls";

describe('ImageSelector', () => {

    let urlIndex = null
    const sendDataToParent = (index) => {
        urlIndex = index;
    }
    
    it('should render without error', () => {
        render(<ImageSelector imageUrls={imageUrls}/>)
    })

    it('clicked image passes index to parent', () => {
        render(<ImageSelector sendDataToParent={sendDataToParent} selectedIndex={urlIndex} imageUrls={imageUrls}/>)
        fireEvent.click(screen.getByTestId("3"))
        expect(urlIndex).toBe(3)
    })
})


test('selected image gets border', () => {
    render(<ImageSelector  selectedIndex={4} imageUrls={imageUrls}/>)
    const selected = screen.getByTestId("4")
    expect(selected.className).toContain("selected")
})

test('clicking on an image selects it and deselects previous image',  () => {
    let testIndex = 0
    const sendDataToParent = (index) => {
        testIndex = index;
    }
    
    const test = render(<ImageSelector sendDataToParent={sendDataToParent} selectedIndex={testIndex} imageUrls={imageUrls}/>)
    
    const initial = test.getByTestId(0)
    const clicked = test.getByTestId("5")
    fireEvent.click(clicked)
    
    render(<ImageSelector sendDataToParent={sendDataToParent} selectedIndex={testIndex} imageUrls={imageUrls}/>, test)

    expect(initial.className).not.toContain("selected")
    expect(clicked.className).toContain("selected")
})