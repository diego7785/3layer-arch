import Piece from './piece.interface';

export default class PieceController implements Piece{
  private boardSize = 8;

  validateRightTurn(piece: any, game: any): boolean {
    if (game) {
      if (game.game.turn === piece.color) {
        return true;
      }
    }
    return false;
  }

  getOnlyFrontMoves(
    positionInRow: number,
    positionInColumn: number,
    board: Array<any>,
    availableMoves: Array<any>,
    isPawn: boolean
  ): void {
    for (let i = positionInRow; i < this.boardSize; i++) {
      if (i + 1 <= 7) {
        if (board[i + 1][positionInColumn] === null) {
          availableMoves.push([i + 1, positionInColumn]);
        } else {
          if (!isPawn) {
            availableMoves.push([i + 1, positionInColumn]);
            break;
          }
        }
      }
    }
  }

  getOnlyBackMoves(
    positionInRow: number,
    positionInColumn: number,
    board: Array<any>,
    availableMoves: Array<any>,
    isPawn: boolean
  ): void {
    for (let i = positionInRow; i > 0; i--) {
      if (i - 1 >= 0) {
        if (board[i - 1][positionInColumn] === null) {
          availableMoves.push([i - 1, positionInColumn]);
        } else {
          if (!isPawn) {
            availableMoves.push([i - 1, positionInColumn]);
            break;
          }
        }
      }
    }
  }

  getRightLeftMoves(
    positionInRow: number,
    board: Array<any>,
    availableMoves: Array<any>,
    i: number,
    iOffset: number
  ): boolean {
    if (i + iOffset <= 7) {
      if (board[positionInRow][i + iOffset] === null) {
        availableMoves.push([positionInRow, i + iOffset]);
        return false;
      } else {
        availableMoves.push([positionInRow, i + iOffset]);
        return true;
      }
    }
    return true;
  }

  getAllFrontMoves(
    position: Array<any>,
    board: Array<any>,
    availableMoves: Array<any>
  ): void {
    const positionInRow = position[0];
    const positionInColumn = position[1];

    // Front
    this.getOnlyFrontMoves(
      positionInRow,
      positionInColumn,
      board,
      availableMoves,
      false
    );

    // Back
    this.getOnlyBackMoves(
      positionInRow,
      positionInColumn,
      board,
      availableMoves,
      false
    );

    // Right
    for (let i = positionInColumn; i < this.boardSize; i++) {
      if (
        this.getRightLeftMoves(
          positionInRow,
          board,
          availableMoves,
          i,
          1
        )
      ) {
        break;
      }
    }

    // Left
    for (let i = positionInColumn; i > 0; i--) {
      if (
        this.getRightLeftMoves(
          positionInRow,
          board,
          availableMoves,
          i,
          -1
        )
      ) {
        break;
      }
    }
  }

  get1FrontBackLeftRigthMoves(
    positionInRow: number,
    positionInColumn: number,
    positionInRowOffset: number,
    positionInColumnOffset: number,
    availableMoves: Array<any>,
    board: Array<any>
  ): void {
    if (
      board[positionInRow + positionInRowOffset][
        positionInColumn + positionInColumnOffset
      ] === null
    ) {
      availableMoves.push([
        positionInRow + positionInRowOffset,
        positionInColumn + positionInColumnOffset,
      ]);
    }
  }

  get1FMoves(
    position: Array<any>,
    board: Array<any>,
    availableMoves: Array<any>
  ): void {
    const positionInRow = position[0];
    const positionInColumn = position[1];

    // Front
    if (positionInRow + 1 <= 7) {
      this.get1FrontBackLeftRigthMoves(
        positionInRow,
        positionInColumn,
        1,
        0,
        availableMoves,
        board
      );
    }

    // Back
    if (positionInRow - 1 >= 0) {
      this.get1FrontBackLeftRigthMoves(
        positionInRow,
        positionInColumn,
        -1,
        0,
        availableMoves,
        board
      );
    }

    // Right
    if (positionInColumn + 1 <= 7) {
      this.get1FrontBackLeftRigthMoves(
        positionInRow,
        positionInColumn,
        0,
        1,
        availableMoves,
        board
      );
    }

    // Left
    if (positionInColumn - 1 >= 0) {
      this.get1FrontBackLeftRigthMoves(
        positionInRow,
        positionInColumn,
        0,
        -1,
        availableMoves,
        board
      );
    }
  }

  get1DMoveCheckingIsPawn(
    positionInRow: number,
    positionInColumn: number,
    offsetRow: number,
    offsetColumn: number,
    isPawn: boolean,
    board: Array<any>,
    availableMoves: Array<any>
  ): void {
    const possiblePieceToKill =
      board[positionInRow + offsetRow][positionInColumn + offsetColumn];

    if (possiblePieceToKill === null && !isPawn) {
      availableMoves.push([
        positionInRow + offsetRow,
        positionInColumn + offsetColumn,
      ]);
    } else {
      if (possiblePieceToKill) {
        if (
          possiblePieceToKill.color !==
          board[positionInRow][positionInColumn].color
        ) {
          availableMoves.push([
            positionInRow + offsetRow,
            positionInColumn + offsetColumn,
          ]);
        }
      }
    }
  }

  get1DMoves(
    position: Array<any>,
    board: Array<any>,
    availableMoves: Array<any>,
    isPawn: boolean
  ): void {
    const positionInRow = position[0];
    const positionInColumn = position[1];

    // Right front diagonal
    if (positionInRow + 1 <= 7 && positionInColumn + 1 <= 7) {
      this.get1DMoveCheckingIsPawn(
        positionInRow,
        positionInColumn,
        1,
        1,
        isPawn,
        board,
        availableMoves
      );
    }

    // Left front diagonal
    if (positionInRow + 1 <= 7 && positionInColumn - 1 >= 0) {
      this.get1DMoveCheckingIsPawn(
        positionInRow,
        positionInColumn,
        1,
        -1,
        isPawn,
        board,
        availableMoves
      );
    }

    // Right back diagonal
    if (positionInRow - 1 >= 0 && positionInColumn + 1 <= 7) {
      this.get1DMoveCheckingIsPawn(
        positionInRow,
        positionInColumn,
        -1,
        1,
        isPawn,
        board,
        availableMoves
      );
    }

    // Left back diagonal
    if (positionInRow - 1 >= 0 && positionInColumn - 1 >= 0) {
      this.get1DMoveCheckingIsPawn(
        positionInRow,
        positionInColumn,
        -1,
        -1,
        isPawn,
        board,
        availableMoves
      );
    }
  }

  getAllDiagonalMovesHelper(
    row: number,
    column: number,
    rowOffset: number,
    columnOffset: number,
    board: Array<any>,
    availableMoves: Array<any>
  ): boolean {
    if (board[row + rowOffset][column + columnOffset] === null) {
      availableMoves.push([row + rowOffset, column + columnOffset]);
      return false;
    } else {
      availableMoves.push([row + rowOffset, column + columnOffset]);
      return true;
    }
  }

  getDMoves(
    position: Array<any>,
    board: Array<any>,
    availableMoves: Array<any>
  ): void {
    const positionInRow = position[0];
    const positionInColumn = position[1];

    // Right front diagonal
    let row = positionInRow;
    for (let column = positionInColumn; column < this.boardSize; column++) {
      if (row + 1 <= 7 && column + 1 <= 7) {
        if (
          this.getAllDiagonalMovesHelper(
            row,
            column,
            1,
            1,
            board,
            availableMoves
          )
        ) {
          break;
        }
      }
      row++;
    }

    // Right back diagonal
    row = positionInRow;
    for (let column = positionInColumn; column < this.boardSize; column++) {
      if (row - 1 >= 0 && column + 1 <= 7) {
        if (
          this.getAllDiagonalMovesHelper(
            row,
            column,
            -1,
            1,
            board,
            availableMoves
          )
        ) {
          break;
        }
      }
      row--;
    }

    // Left front diagonal
    row = positionInRow;
    for (let column = positionInColumn; column > 0; column--) {
      if (row + 1 <= 7 && column - 1 >= 0) {
        if (
          this.getAllDiagonalMovesHelper(
            row,
            column,
            1,
            -1,
            board,
            availableMoves
          )
        ) {
          break;
        }
      }
      row++;
    }

    // Left back diagonal
    row = positionInRow;
    for (let column = positionInColumn; column > 0; column--) {
      if (row - 1 >= 0 && column - 1 >= 0) {
        if (
          this.getAllDiagonalMovesHelper(
            row,
            column,
            -1,
            -1,
            board,
            availableMoves
          )
        ) {
          break;
        }
      }
      row--;
    }
  }

  getLMoves(position: Array<any>, availableMoves: Array<any>): void {
    const positionInRow = position[0];
    const positionInColumn = position[1];

    let knightPossibleMovesInRow = [2, 1, -1, -2, -2, -1, 1, 2];
    let knightPossibleMovesInColumn = [1, 2, 2, 1, -1, -2, -2, -1];

    for (let i = 0; i < this.boardSize; i++) {
      let x = positionInRow + knightPossibleMovesInRow[i];
      let y = positionInColumn + knightPossibleMovesInColumn[i];

      if (x >= 0 && y >= 0 && x < this.boardSize && y < this.boardSize) {
        availableMoves.push([x, y]);
      }
    }
  }

  getValidMoves(genericPiece: any, piece: any, board: Array<any>): Array<any> {
    const availableMoves: Array<any> = [];
    const position = piece.position;
    for (const move of genericPiece.moves) {
      if (move === "F") {
        if (genericPiece.name === "Pawn" && genericPiece.color === "White") {
          this.getOnlyFrontMoves(
            position[0],
            position[1],
            board,
            availableMoves,
            true
          );

          if (piece.isFirstMove) {
            availableMoves.splice(2, availableMoves.length);
          } else {
            availableMoves.splice(1, availableMoves.length);
          }
        } else if (
          genericPiece.name === "Pawn" &&
          genericPiece.color === "Black"
        ) {
          this.getOnlyBackMoves(
            position[0],
            position[1],
            board,
            availableMoves,
            true
          );
          if (piece.isFirstMove) {
            availableMoves.splice(2, availableMoves.length);
          } else {
            availableMoves.splice(1, availableMoves.length);
          }
        } else {
          this.getAllFrontMoves(position, board, availableMoves);
        }
      } else if (move === "1F") {
        this.get1FMoves(position, board, availableMoves);
      } else if (move === "1D") {
        if (genericPiece.name === "Pawn") {
          this.get1DMoves(position, board, availableMoves, true);
        } else {
          this.get1DMoves(position, board, availableMoves, false);
        }
      } else if (move === "D") {
        this.getDMoves(position, board, availableMoves);
      } else if (move === "L") {
        this.getLMoves(position, availableMoves);
      }
    }

    return availableMoves;
  }

  newPositionIsInValidMoves(movement: Array<any>, validMoves: Array<any>) {
    for (let i = 0; i < validMoves.length; i++) {
      if (
        movement[0] === validMoves[i][0] &&
        movement[1] === validMoves[i][1]
      ) {
        return true;
      }
    }
    return false;
  }

  newPositionCouldKillsPiece(
    newPosition: Array<any>,
    color: string,
    board: Array<any>
  ): string {
    if (board[newPosition[0]][newPosition[1]] !== null) {
      if (board[newPosition[0]][newPosition[1]].color !== color) {
        return "kill";
      }
      return "sameColor";
    }
    return "move";
  }

  async killPiece(newPosition: Array<any>, board: Array<any>, BoardPiece: any): Promise<void> {
    const pieceToKill = board[newPosition[0]][newPosition[1]];
    pieceToKill.isAlive = false;
    await BoardPiece.findByIdAndUpdate(pieceToKill._id, pieceToKill);
  }
}
