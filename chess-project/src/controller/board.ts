export default class Board {
  private boardPositionX = 0;
  private boardPositionY = 1;
  private board: Array<any>;

  constructor(private tableSize: number = 8) {
    this.board = [];
    this.initializeBoard();
  }

  initializeBoard() {
    for (let i = 0; i < this.tableSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.tableSize; j++) {
        this.board[i][j] = null;
      }
    }
  }

  getBoard(): Array<any> {
    return this.board;
  }

  renderPiecesInBoard(piecesInBoard: Array<any>): any[] {
    this.initializeBoard();
    for (const pieceToSet of piecesInBoard) {
      if(pieceToSet.isAlive){
        this.board[pieceToSet.position[this.boardPositionX]][
          pieceToSet.position[this.boardPositionY]
        ] = pieceToSet;
      }
    }
    return this.board;
  }
}
