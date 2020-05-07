"use strict";

function renderChessboard( size ) {
    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard');

    // validacija
    if ( !isFinite(size) ) {
        return console.error(`ERROR: skaicius turi buti  normalus skaicius`);
    }
    if ( size < 0 ) {
        return console.error(`ERROR: sakicius turi buti teigiamas`);
    }
    if ( size % 1 !== 0) {
        return console.error(`ERROR: skaicius negali tureti liekanos, reikalingas sveikas skaicius`);
    }

    // logika
    for (let r = 0; r < size; r++) {
         let cellsHTML = '';  
   
        for (let c = 0; c < size; c++) {
            let cellColor = '';

            if ( (r+c) % 2 === 0) {
                cellColor = 'black';  
            } else {
                cellColor = 'white';
            }
            cellsHTML += `<div class="cell ${cellColor}" style="width: ${100 / size}%;"></div>`;
        }
        HTML += `<div class="row" style="height: ${100 / size}%;">
            ${cellsHTML}
        </div>`;
    }
  
   
    DOMchessboard.innerHTML = HTML;
    return;
}

renderChessboard( 8 );