//Create the grid
document.getElementById("adjustButton").addEventListener('click', createGrid);

function createGrid() {
    //Get the input from the user
    let divsPerSide = prompt("Enter a number between 1 and 100 to determine the number of squares per side");
    if (divsPerSide > 100||divsPerSide < 1) {
        alert("Please enter a valid number");
        return;
    }
    let numberOfDivs = divsPerSide * divsPerSide;

    //Create all the divs
    for (let i = 0; i < numberOfDivs; i++) {
        let base = document.getElementById("base");

        let square = document.createElement('div');
        square.classList.add('squares');
        
        base.appendChild(square);
    }

    //Align the divs in the grid
    document.getElementById("base").style.gridTemplateColumns = "repeat(" + divsPerSide + ", 1fr)";
    document.getElementById("base").style.gridTemplateRows = "repeat(" + divsPerSide + ", 1fr)";
}