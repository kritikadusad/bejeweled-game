// @format
import React, {Component} from 'react';
import Cell from './Cell.js';
import './Board.css';
import shortid from 'shortid';
const jewels = [1, 2, 3, 4, 5, 6, 7];
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
    };
    // Bindings:
    this.generateJewel = this.generateJewel.bind(this);
    this.createGrid = this.createGrid.bind(this);
    this.jewelRemove = this.jewelRemove.bind(this);
    this.countSameAdjacent = this.countSameAdjacent.bind(this);
    this.checkGrid = this.checkGrid.bind(this);
    this.checkMovePossible = this.checkMovePossible.bind(this);
    this.checkSameJewelsAndRemove = this.checkSameJewelsAndRemove.bind(this);
  }
  generateJewel(arr) {
    // For now, jewels are represented as numbers between 1 and 7.
    return arr[Math.floor(arr.length * Math.random())];
  }
  checkSameJewelsAndRemove(arr, adjacentJewel1, adjacentJewel2) {
    if (adjacentJewel1 === adjacentJewel2) {
      return this.jewelRemove(arr, adjacentJewel1);
    }
    return arr;
  }
  jewelRemove(arr, jewel) {
    return arr.filter(function(ele) {
      return ele !== jewel;
    });
  }
  createGrid(arr_input) {
    let grid = [];
    // Making an 8x8 grid
    for (let i = 0; i < 8; i++) {
      grid[i] = [];
      for (let j = 0; j < 8; j++) {
        let arr = Array.from(arr_input);
        if (i > 1) {
          arr = this.checkSameJewelsAndRemove(
            arr,
            grid[i - 1][j],
            grid[i - 2][j],
          );
        }
        if (j > 1) {
          arr = this.checkSameJewelsAndRemove(
            arr,
            grid[i][j - 1],
            grid[i][j - 2],
          );
        }
        let newJewel = this.generateJewel(arr);
        grid[i][j] = newJewel;
      }
    }
    return grid;
  }

  resetGame() {
    this.setState({game: []});
  }

  countSameAdjacent(cell, i, j, grid) {
    let count = 0;
    //Check cell above the given cell position
    if (i >= 1 && cell === grid[i - 1][j]) {
      count++;
    }
    //Check cell below the given cell position
    if (i <= 6 && cell === grid[i + 1][j]) {
      count++;
    }
    //Check cell on the left of the given cell position
    if (j >= 1 && cell === grid[i][j - 1]) {
      count++;
    }
    //Check cell on the right of the given cell position
    if (j <= 6 && cell === grid[i][j + 1]) {
      count++;
    }
    return count;
  }

  checkMovePossible(i, j, grid) {
    const cell = grid[i][j];
    //Check if 2 cells above the given cell position
    if (i >= 2 && cell === grid[i - 1][j]) {
      const count = this.countSameAdjacent(cell, i - 2, j, grid);
      if (count >= 2) {
        return true;
      }
    }
    //Check if 2 cells below the given cell position
    if (i <= 5 && cell === grid[i + 1][j]) {
      const count = this.countSameAdjacent(cell, i + 2, j, grid);
      if (count >= 2) {
        return true;
      }
    }
    //Check if 2 cells left of the given cell position
    if (j >= 2 && cell === grid[i][j - 1]) {
      if (this.countSameAdjacent(cell, i, j - 2, grid) >= 2) {
        return true;
      }
    }
    //Check if 2 cells right of the given cell position
    if (j <= 5 && cell === grid[i][j + 1]) {
      const count = this.countSameAdjacent(cell, i, j + 2, grid);
      if (count >= 2) {
        return true;
      }
    }
  }

  //Check if grid has at least one possible move. If not, reset the game.
  checkGrid(grid) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.checkMovePossible(i, j, grid)) {
          return true;
        }
      }
    }
    this.resetGame();
  }
  render() {
    const boardGrid = this.createGrid(jewels);
    this.checkGrid(boardGrid);
    let gridDiv = <div />;
    let board = [];
    for (let row of boardGrid) {
      for (let jewel of row) {
        board.push(jewel);
      }
      gridDiv = (
        <div className="grid-container">
          {board.map(jewel => (
            <div className="grid-item" key={shortid.generate()}>
              <Cell jewel={jewel} />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="board">
        <h3> Lets play Bejeweled!</h3>
        {gridDiv}
        <button className="reset-button" onClick={this.resetGame.bind(this)}>
          Reset
        </button>
      </div>
    );
  }
}

export default Board;
