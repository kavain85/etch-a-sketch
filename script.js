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

// Resets grid
function resetGrid() {
    container.replaceChildren();
};

// Creates grid upon button press
gridButton.addEventListener('click', () => {
    gridSize = document.querySelector('#size-input').value;
    resetGrid();
    createGrid();
});

// Reloads page
resetButton.addEventListener('click', () => {
    window.location.reload();
});