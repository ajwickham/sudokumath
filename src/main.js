//import $ from 'jquery';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
export default function SudArray(grid) {
  this.grid = grid;
}

const fullArraySudoku = new SudArray([5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,
  0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9]);

SudArray.prototype.pushIntoArray = function(position) {
    this.grid[5] = 1; 
};

SudArray.prototype.findNextBlank = function() {
  let blankPosition = [] 
  for (let i=0; i<81; i++) {
    if (this.grid[i] === 0) {
      blankPosition.push(i);
    };
  };
  return blankPosition
};

SudArray.prototype.findNumberToTry = function() {
  let blankPosition = this.findNextBlank();
  let numberTrial = [];
  for(let i = 0; i<blankPosition; i++) {
    //this.checkRow(i);
  }
  return blankPosition;
};

SudArray.prototype.checkRow = function(position) {
  //let testrow = []
  let count = 0
  for (let j = 1; j<10; j++){
    for (let i=(parseInt(position/9))*9; i<((parseInt(position/9))*9)+9; i++) {
    //testrow.push(i);
      if (this.grid[i] === j) {
        count = 1;
        }
      }
    if (count === 0) {
      return j  
    }
  };
  //let rowMinimum = Math.min(...testrow);
}



