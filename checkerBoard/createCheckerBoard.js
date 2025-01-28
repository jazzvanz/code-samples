function createCheckerBoard(columns, column_width, rows, row_height) { 
    const black = 'X';
    const white = "Y";

    let board = [];
    let column;
    let row;

    for (let i = 0; i > column_width; i++) { 
        column += black
    }
}
// columns = 5
// column_width = 3
// row_height = 2
// rows = 4
console.log(createCheckerBoard(5, 3, 4, 2));