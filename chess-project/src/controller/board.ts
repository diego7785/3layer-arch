export function createBoard(): Array<any>{
    let board : Array<any> = [];
    for(let i = 0; i < 8; i++){
        board[i] = [];
        for(let j = 0; j < 8; j++){
            board[i][j] = null;
        }
    }
    return board;
}

export function setPieces(pieces: Array<any>){
    let board = createBoard();
    for(const pieceToSet of pieces){
        
        board[pieceToSet.position[0]][pieceToSet.position[1]] = pieceToSet;
    }
}