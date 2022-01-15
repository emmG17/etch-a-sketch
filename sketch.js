// Create 16x16 pixel divs
let n_rows = 16;
let n_cols = 16;

let n_pixels = n_rows * n_cols;
let pixels = [];

for (let i = 0; i < n_pixels; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixels.push(pixel);
}

// Append pixels to the grid
const pixelGrid = document.querySelector(".grid-container");

for (pixel of pixels) {
    pixelGrid.appendChild(pixel);
}