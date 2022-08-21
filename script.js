const container = document.querySelector('.container');
const gridButton = document.querySelector('#create-grid');
const resetButton = document.querySelector('#reset');
let sizeInput;
let gridSize;

function createSquare () {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare)
}

function createGrid() {
    for (i = 0; i < gridSize; i++) {
        createSquare();
    }
}

function resetGrid() {
    const gridExists = document.getElementsByClassName('#grid-square');
    if (gridExists === true) {
        gridSquare.classList.remove('grid-square')
    };
};

gridButton.addEventListener('click', () => {
    sizeInput = parseInt(prompt('Select grid size (1-10):'));
    gridSize = sizeInput*sizeInput;
    // resetGrid();
    createGrid();
});

resetButton.addEventListener('click', () => {
    window.location.reload();
});