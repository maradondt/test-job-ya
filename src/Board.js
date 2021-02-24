import getRandomCellValue from './utils/index.js';
import Cell from './Cell.js';

export default class Board {
  static getFromString(string) {
    const rows = string.trim().split('\n');
    const board = rows.map((row) => row
      .split(' ')
      .map((item) => new Cell(+item)));
    return new Board(board);
  }

  constructor(m, n) {
    if (typeof m === 'object') {
      this.board = m;
    } else {
      this.board = Array(m).fill(Array(n).fill(null))
        .map((row) => row
          .map(
            () => new Cell(getRandomCellValue()),
          ));
    }
  }

  getNeighbors(row, coll) {
    const neighbors = [];
    this.board.forEach((rowElement, rowIndex) => {
      switch (rowIndex) {
        case (row - 1):
        case (row + 1):
          rowElement.forEach((cellElement, cellIndex) => {
            if (cellIndex === coll
              || cellIndex === coll + 1
              || cellIndex === coll - 1) {
              neighbors.push(cellElement);
            }
          });
          break;
        case (row):
          rowElement.forEach((cellElement, cellIndex) => {
            if (cellIndex === coll + 1
              || cellIndex === coll - 1) {
              neighbors.push(cellElement);
            }
          });
          break;
        default:
          break;
      }
    });

    return neighbors;
  }

  createNewBoard() {
    const newBoard = this.board
      .map((row, rowIndex) => row
        .map((cell, cellIndex) => {
          const neighbors = this.getNeighbors(rowIndex, cellIndex);
          const liveNeighborsCount = neighbors
            .filter(
              (item) => item.isAlive(),
            ).length;
          // if dead has 3 live neighbors, she is alive
          if (cell.isDead()) {
            return liveNeighborsCount === 3
              ? Cell.createLive()
              : Cell.createDead();
          }
          // if live
          if (liveNeighborsCount < 2) {
            return Cell.createDead();
          }
          if (liveNeighborsCount === 2 || liveNeighborsCount === 3) {
            return Cell.createLive();
          }
          // if (liveNeighborsCount > 3)
          return Cell.createDead();
        }));
    this.board = newBoard;
  }

  render() {
    const string = this.board.map((row) => row.join(' ')).join('\n');
    console.log('New state');
    console.log(string);
  }

  getBoard() {
    return this.board.map((row) => row.join(' ')).join('\n');
  }

  start() {
    const tick = () => {
      this.render();
      this.createNewBoard();
      setTimeout(tick, 1000);
    };
    setTimeout(() => {
      tick();
    }, 1000);
  }
}
