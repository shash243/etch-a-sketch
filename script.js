function generateGrid() {
    let num = Number(prompt("Enter number"));
    const mainDiv = document.querySelector('div.main');
    for (let i = 0; i < (num * num); i++) {
        divCell = document.createElement('div');
        divCell.classList.add('cell');
        divCell.style.cssText = `width: ${Math.floor(960/ (num))}px; height: ${Math.floor(960 / (num))}px`;
        mainDiv.appendChild(divCell);
    }

    cellDivs = document.querySelectorAll('div.cell');
    cellDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.classList.add('hover');
        })
    });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    generateGrid();
})