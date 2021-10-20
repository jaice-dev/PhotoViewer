import {imageUrls} from "./ImageUrls";

test('first link is correct', () => {
    expect(imageUrls[0]).toBe("https://picsum.photos/id/600/1600/900.jpg")
});

test('doesnt contain broken links', () => {
    expect(imageUrls).not.toContain("https://picsum.photos/id/601/1600/900.jpg" && "https://picsum.photos/id/624/1600/900.jpg")
})