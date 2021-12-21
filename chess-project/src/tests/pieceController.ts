// import Piece from '../models/piece';
import PieceController from '../controller/piece';
// const PieceController = require('../controller/piece');

describe("Testing Piece Controller", () => {
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

  it("Validate move", () => {
    const pieceController = new PieceController();
    const piece = {
      color: "White",
    };
    const game = {
      game: {
        turn: "White",
      },
    };
    expect(pieceController.validateRightTurn(piece, game)).toBeTruthy();
  });

  it("Get F Moves", () => {
    const pieceController = new PieceController();
    expect(
      pieceController.getValidMoves({ moves: ["F"], name:"Tower" }, {position: [0, 2], isFirstMove: false}, board)
    ).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 1],
      [0, 0],
    ]);
  });

  it("Get 1F Moves", () => {
    const pieceController = new PieceController();

    expect(
      pieceController.getValidMoves({ moves: ["1F"], name: "King" },  {position: [0, 2], isFirstMove: false}, board)
    ).toEqual([
      [1, 2],
      [0, 3],
      [0, 1],
    ]);
  });

  it("Get 1D Moves", () => {
    const pieceController = new PieceController();

    expect(
      pieceController.getValidMoves({ moves: ["1D"], name: "King" },  {position: [0, 2], isFirstMove: false}, board)
    ).toEqual([
      [1, 3],
      [1, 1],
    ]);
  });

  it("Get D Moves", () => {
    const pieceController = new PieceController();

    expect(
      pieceController.getValidMoves({ moves: ["D"], name: "Bishop" },  {position: [0, 2], isFirstMove: false}, board)
    ).toEqual([
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 7],
      [1, 1],
      [2, 0],
    ]);
  });

  it("Get L Moves", () => {
    const pieceController = new PieceController();

    expect(
      pieceController.getValidMoves({ moves: ["L"], name: "Horse" },  {position: [0, 2], isFirstMove: false}, board)
    ).toEqual([
      [2, 3],
      [1, 4],
      [1, 0],
      [2, 1],
    ]);
  });

  it("New position is in valid moves", () => {
    const pieceController = new PieceController();
    expect(
      pieceController.newPositionIsInValidMoves(
        [1, 2],
        [
          [1, 2],
          [0, 3],
          [0, 1],
        ]
      )
    ).toBeTruthy();
  });

  it('New position could kills piece', () => {
    const pieceController = new PieceController();
    const pieceToKill = {color: "Black"}
    const boardWithPieceToKill = [
      [null, null, pieceToKill, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(pieceController.newPositionCouldKillsPiece([0,2], 'White', boardWithPieceToKill)).toEqual('kill')
  })
});
