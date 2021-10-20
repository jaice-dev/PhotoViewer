import { render, screen } from '@testing-library/react';
import {imageUrls} from "./ImageUrls";

test('first link is correct', () => {
    expect(imageUrls[0]).toBe("https://picsum.photos/id/600/1600/900.jpg")
});