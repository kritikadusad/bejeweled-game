import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            game : []
        }
        //Bindings:
        this.generateJewel = this.generateJewel.bind(this)
        this.createGrid = this.createGrid.bind(this)
    }
    generateJewel() {
          //For now, jewels are represented as numbers between 1 and 7.
          const jewels = [1, 2, 3, 4, 5, 6, 7];
          return jewels[Math.floor(jewels.length * Math.random())];
    }
    createGrid() {
            let grid = [];
            // Making a 8x8 grid 
            for (let i = 0; i < 9; i++){
                grid[i] = [];
                for (let j = 0; j < 9; j++){
                    const new_jewel = this.generateJewel();
                    grid[i][j] = [new_jewel];
                }
            }
            return grid
    }
    resetGame () {
        this.setState( { game: [] })
    } 
  render() {
    return (
        <div className="board">
            { this.createGrid() }
            <br />
            <button className="reset-button" onClick = { this.resetGame.bind(this) }>Reset</button>    
        </div>
    );
  }
}

export default Board;
