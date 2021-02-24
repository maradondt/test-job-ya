import Cell from '../src/Cell.js';

describe('Cell test', () => {
  const cell1 = new Cell(0);
  const cell2 = new Cell(1);

  test('test cell methods', () => {
    expect(cell1.isAlive()).toBeFalsy();
    expect(cell2.isDead()).toBeFalsy();
  });
});
