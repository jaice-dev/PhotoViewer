import {imageUrls} from "./ImageUrls";

test('first link is correct', () => {
    expect(imageUrls[0]).toBe("https://picsum.photos/id/600/1600/900.jpg")
});

test('doesnt contain broken links', () => {
    expect(imageUrls).not.toContain("https://picsum.photos/id/601/1600/900.jpg" && "https://picsum.photos/id/624/1600/900.jpg")
})

test('each url in imageUrls is unique', () => {
    // add function to check that array is unique.
    const isArrayUnique = (arr) => Array.isArray(arr) && new Set(arr).size === arr.length; // add function to check that array is unique.
    expect(isArrayUnique(imageUrls)).toBeTruthy();
})