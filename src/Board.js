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
            for (let i = 0; i < 8; i++){
                grid[i] = [];
                for (let j = 0; j < 8; j++){
                    const new_jewel = this.generateJewel();
                    if (i > 1 && new_jewel === grid[i-1][j]) {
                        console.log("found same adj cell.")
                        if (new_jewel === grid[i-2][j]){
                            const new_jewel = this.generateJewel();
                        }
                    }
                    else if (j > 1 && new_jewel === grid[i][j-1]) {
                        console.log("found same adj cell.")
                        if (new_jewel === grid[i][j-2]) {
                            const new_jewel = this.generateJewel();
                        } 
                    }
                    grid[i][j] = [new_jewel];
                }
            }
            return grid
    }
    resetGame () {
        this.setState( { game: [] })
    } 
  render() {
    const boardGrid = this.createGrid()
    let boardDiv = <div />
    boardDiv = 
        <div>
            {boardGrid.map(jewel=>
                <div className="grid-container">
                    <div className="grid-item"> { jewel } </div>
                </div>
            )}
        </div>;

    return (
        <div className="board">
            { boardDiv }
            <br />
            <button className="reset-button" onClick = { this.resetGame.bind(this) }>Reset</button>    
        </div>
    );
  }
}

export default Board;
