import Piece from './piece.interface';

export default class Piece1DMoves implements Piece {
    private genericPiece: any;
    private board: Array<any>;
    private position: Array<any>;

    constructor(genericPiece: any, board: Array<any>, position: Array<any>){
        this.genericPiece = genericPiece;
        this.board = board;
        this.position = position;
    }

    getValidMoves(): Array<any> {
        let availableMoves: Array<any> = [];
        if (this.genericPiece.name === "Pawn") {
            this.get1DMoves(this.position, this.board, availableMoves, true);
          } else {
            this.get1DMoves(this.position, this.board, availableMoves, false);
          }
        return availableMoves;
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
}