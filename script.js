mainDiv = document.querySelector('div.main');
for (let i = 0; i < (16 * 16); i++){
    divCell = document.createElement('div');
    divCell.classList.add('cell');
    divCell.style.cssText = `width: ${(640/17)}px; height: ${(640/17)}px`;
    mainDiv.appendChild(divCell);
}

cellDivs = document.querySelectorAll('div.cell');
cellDivs.forEach(div => {
    div.addEventListener('mouseover', ()=>{
        div.classList.add('hover');
    })
});