// Create 16x16 pixel divs
let n_rows = 16;
let n_cols = 16;
let n_pixels = n_rows * n_cols;
const pixelGrid = document.querySelector(".grid-container");

function defineGrid(grid, n_rows, n_cols) {
    grid.style.gridTemplateRows = `repeat(${n_rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${n_cols}, 1fr)`;
}

function getPixels(n_pixels) {
    let pixels = [];

    for (let i = 0; i < n_pixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixels.push(pixel);
    }

    return pixels;
}

function populateGrid(grid, n_pixels) {
    const pixels = getPixels(n_pixels);
    // Append pixels to the grid
    for (pixel of pixels) {
        let pixelBorderWidth = 1;
        pixel.style.borderWidth = `${pixelBorderWidth}px`;
        pixel.style.paddingBottom = `calc(100% - ${2 * pixelBorderWidth}px)`;
        grid.appendChild(pixel);
    }
}

defineGrid(pixelGrid, n_rows, n_cols);
populateGrid(pixelGrid, n_pixels);
