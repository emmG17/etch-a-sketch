// Create 16x16 pixel divs
let nCols = 16;
let nRows = 16;
const pixelGrid = document.querySelector(".grid-container");
const resetButton = document.getElementById("reset");
const createGridButton = document.getElementById("create-grid");
const colsInput = document.getElementById("n-cols");
const rowsInput = document.getElementById("n-rows")

function defineGrid(grid, n_rows, n_cols) {
    grid.style.gridTemplateRows = `repeat(${n_rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${n_cols}, 1fr)`;
}

function createPixel(){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixel.addEventListener("click", ()=>{
        pixel.classList.toggle('selected');
    });

    return pixel;
}

function getPixels(n_pixels) {
    let pixels = [];

    for (let i = 0; i < n_pixels; i++) {
        const pixel = createPixel();
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

function createGrid(n_rows, n_cols){
    let n_pixels = n_rows * n_cols;
    pixelGrid.innerHTML = "";
    defineGrid(pixelGrid, n_rows, n_cols);
    populateGrid(pixelGrid, n_pixels);
}

resetButton.addEventListener("click", () => {
    createGrid(nCols, nRows);
});


createGridButton.addEventListener("click", () => {
    let cols = colsInput.valueAsNumber;
    let rows = rowsInput.valueAsNumber;
    let isValidInput = (rows && cols) && (colsInput.validity.valid && rowsInput.validity.valid)
    if (isValidInput)  {
        nRows = rows;
        nCols = cols;
    }

    pixelGrid.innerHTML = "";
    defineGrid(pixelGrid, nRows, nCols);
    populateGrid(pixelGrid, nRows*nCols);
});

colsInput.setAttribute("placeholder", nCols.toString());
rowsInput.setAttribute("placeholder", nRows.toString());

createGrid(nRows, nCols);
