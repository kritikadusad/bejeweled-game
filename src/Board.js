import React, { Component } from 'react';
import Cell from './Cell.js';
import './Board.css';

const jewels = [1, 2, 3, 4, 5, 6, 7];
class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            game : []
        }
        //Bindings:
        this.generateJewel = this.generateJewel.bind(this)
        this.createGrid = this.createGrid.bind(this)
        this.jewelRemove = this.jewelRemove.bind(this)
        this.checkAdjacentCells = this.checkAdjacentCells.bind(this)
    }
    generateJewel(arr) {
          //For now, jewels are represented as numbers between 1 and 7.
          return arr[Math.floor(arr.length * Math.random())];
    }
    checkAdjacentCells( newJewel, adjacentJewel1, adjacentJewel2 ){
        if (newJewel === adjacentJewel1 && adjacentJewel1 === adjacentJewel2) {
                return true
            } 
        return false
    }
    jewelRemove(arr, jewel) {
       return arr.filter(function(ele){
          return ele !== jewel;
       });
    }
    createGrid(arr) {
    let grid = [];
    // Making a 8x8 grid 
        for (let i = 0; i < 8; i++){
            grid[i] = [];
            for (let j = 0; j < 8; j++){
                let newJewel = this.generateJewel(arr);
                if (i > 1) {
                    let sameCell = this.checkAdjacentCells(newJewel, grid[i-1][j] , grid[i-2][j]);
                    console.log(newJewel, grid[i-1][j], grid[i-2][j],sameCell)
                    if (sameCell) {
                        let filteredArr = this.jewelRemove(arr, newJewel)
                        console.log(filteredArr)
                        newJewel = this.generateJewel(filteredArr);
                        console.log(newJewel)
                    }
                }
                if (j > 1) {
                    let sameCell = this.checkAdjacentCells(newJewel, grid[i][j-1] , grid[i][j-1]);
                    console.log(sameCell)
                    if (sameCell) {
                        let filteredArr = this.jewelRemove(arr, newJewel) 
                        newJewel = this.generateJewel(filteredArr);
                    }
                }
                grid[i][j] = newJewel;
            }
        }
        return grid
    }

    resetGame () {
        this.setState( { game: [] })
    } 
    render() {
        const boardGrid = this.createGrid(jewels)
        console.log(boardGrid)
        let gridDiv = <div/>;
        let board = [];
        for ( let row of boardGrid ){
            for ( let jewel of  row) {
                board.push(jewel) ;   
            }    
        gridDiv  = 
            <div className="grid-container">
                {board.map(
                    jewel=> 
                        <div className = "grid-item">
                             <Cell jewel = { jewel } />
                        </div>
                )}
            </div>  
        }

        return (
            <div className = "board">
                {gridDiv}
                <button className="reset-button" onClick = { this.resetGame.bind(this) }>Reset</button>    
            </div>
        );
    }
}

export default Board;
