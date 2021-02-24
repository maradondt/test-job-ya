import Board from '../src/Board';

describe('Test board random', () => {
  const board = new Board(5, 5);
  const boardRows = board.board.length;
  const boardColumns = board.board[0].length;

  test('Testing length', () => {
    expect(boardRows).toBe(5);
    expect(boardColumns).toBe(5);
  });

  test('Testing values', () => {
    board.board.forEach((row) => {
      row.forEach((cell) => expect(cell.toString()).toMatch(/[0-1]/));
    });
  });
});

describe('Test board From string', () => {
  const board = Board.getFromString(`
1 1 1
0 1 0
1 1 1
`);
  const boardRows = board.board.length;
  const boardColumns = board.board[0].length;

  test('Testing length', () => {
    expect(boardRows).toBe(3);
    expect(boardColumns).toBe(3);
  });

  test('get neighbors', () => {
    const neighbors00 = board.getNeighbors(0, 0);
    const expected00 = [1, 0, 1];
    const neighbors11 = board.getNeighbors(1, 1);
    const expected11 = [1, 1, 1, 0, 0, 1, 1, 1];

    neighbors00
      .forEach((elem, index) => {
        expect(elem.get()).toBe(expected00[index]);
      });

    neighbors11
      .forEach((elem, index) => {
        expect(elem.get()).toBe(expected11[index]);
      });
  });
});

describe('rerender', () => {
  const board = Board.getFromString(`
1 1 1
0 1 0
1 1 1
`);

  const expected = `
1 1 1
0 0 0
1 1 1
`;

  const expected2 = `
0 1 0
0 0 0
0 1 0
`;
  test('correct conditions', () => {
    board.createNewBoard();
    expect(board.getBoard()).toBe(expected.trim());
    board.createNewBoard();
    expect(board.getBoard()).toBe(expected2.trim());
  });
});
