export default class Board {
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
}
