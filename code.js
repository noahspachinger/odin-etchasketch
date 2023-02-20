//Create the grid
document.getElementById("adjustButton").addEventListener('click', createGrid);

function createGrid() {
    let numberOfDivs = prompt("Enter a number between 1 and 100 to determine the number of squares per side");

    for (let i = 0; i < numberOfDivs; i++) {
        let base = document.getElementById("base");

        let square = document.createElement('div');
        square.classList.add('squares');

        base.appendChild(square);
    }
}