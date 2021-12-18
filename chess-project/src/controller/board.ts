import piece from "../models/piece";

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

  setPieces(pieces: Array<any>): Array<any> {
    for (const pieceToSet of pieces) {
      this.board[pieceToSet.position[this.boardPositionX]][
        pieceToSet.position[this.boardPositionY]
      ] = pieceToSet;
    }

    return this.board;
  }

  /*
  toString(board:Array<any>): string {
    let friendlyBoard = "";
    for (let i = 0; i < this.tableSize; i++) {
      for (let j = 0; j < this.tableSize; j++) {
        friendlyBoard += board[i][j] + " ";
      }
      friendlyBoard += "\n";
    }
    return friendlyBoard;
  }
  */

  renderPiecesInBoard(piecesInBoard: Array<any>): any[] {
    this.initializeBoard();
    for (let i = 0; i < piecesInBoard.length; i++) {
      this.board[piecesInBoard[i].position[this.boardPositionX]][
        piecesInBoard[i].position[this.boardPositionY]
      ] = piecesInBoard[i];
    }
    return this.board;
  }
}