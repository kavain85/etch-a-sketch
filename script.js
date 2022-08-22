const container = document.querySelector('.container');
const gridButton = document.querySelector('#create-grid');
const resetButton = document.querySelector('#reset');

// Creates grid
function createGrid() {
    resetGrid();
    for (i = 0; i < gridSize; i++) {
        const gridRows = document.createElement('div');
        gridRows.classList.add('row');
        container.appendChild(gridRows);
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridRows.appendChild(gridSquare);
        }
    }
}

// Creates grid upon button press
gridButton.addEventListener('click', () => {
    gridSize = document.querySelector('#size-input').value;
    if (gridSize > 1 && gridSize <= 64) {
    createGrid();
    } else {
        alert('Please enter a size between 1 and 64.')
    };
});

// Button to reset grid
resetButton.addEventListener('click', () => {
    resetGrid();
});

// Resets grid
function resetGrid() {
    container.replaceChildren();
}
