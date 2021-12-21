import BoardController from '../controller/board';

describe('Testing Board Controller', () => {
    const board = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
      ];

      const pieces = [
          {
              position: [0, 0],
              isAlive: true
          },
          {
              position: [0, 2],
              isAlive: true
          }
      ];

    it('Initialize board', () => {
        const boardController = new BoardController();
        expect(boardController.getBoard()).toEqual(board);
    })

    it('Render pieces in board', () => {
        const boardController = new BoardController();
        const boardWithPieces = boardController.renderPiecesInBoard(pieces);

        let piecesRendered = 0;
        for(const piece of pieces){
            for(let i = 0; i < boardWithPieces.length; i++){
                for(let j = 0; j < boardWithPieces[i].length; j++){
                    if(boardWithPieces[i][j] !== null){
                        if(boardWithPieces[i][j].position[0] === piece.position[0] && boardWithPieces[i][j].position[1] === piece.position[1]){
                            piecesRendered++;
                        }
                    }
                }
            }
        }
        expect(piecesRendered).toEqual(2);
    })
})
