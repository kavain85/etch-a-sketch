const container = document.querySelector('.container');
const gridButton = document.querySelector('#create-grid');
const resetButton = document.querySelector('#reset');

// Creates elements for grid rows
function createRows () {
    const gridRows = document.createElement('div');
    gridRows.classList.add('grid-square');
    container.appendChild(gridRows)
}

// Creates grid
function createGrid() {
    for (i = 0; i < gridSize; i++) {
        createRows();
        container.style.display = 'grid';
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    }
}

// Creates grid upon button press
gridButton.addEventListener('click', () => {
    gridSize = document.querySelector('#size-input').value;
    resetGrid();
    createGrid();
});

// Resets grid
resetButton.addEventListener('click', () => {
    container.replaceChildren();
});