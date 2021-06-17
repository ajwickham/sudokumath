//import $ from 'jquery';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
export default function SudArray(grid,solution) {
  this.grid = grid;
  this.solution = solution;
}

const fullArraySudoku = new SudArray([5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,
  0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9],[]);

let blankPosition = []  

SudArray.prototype.pushIntoArray = function(position) {
    this.grid[5] = 1; 
};

SudArray.prototype.buildSolution = function() {
  blankPosition = this.findBlanks();
  let x
  for (let i = 0; i<blankPosition.length; i++) {
    x = this.findNumberToTry()
    this.solution.push(x);
  }
  return this.solution;
}


SudArray.prototype.findBlanks = function() {
  blankPosition = []
  for (let i=0; i<81; i++) {
    if (this.grid[i] === 0) {
      blankPosition.push(i);
    };
  };
  return blankPosition
};

SudArray.prototype.findNumberToTry = function() {
  blankPosition = this.findBlanks();
  let r = 1;
  let q;
  for (let i=r; i<9; i++) {
    q = this.checkRow(blankPosition[0],r);
    r = this.checkColumn(blankPosition[0],q);
    if(i<r) {i=r};
  }
  let positionAndTrial = []
  positionAndTrial.push([blankPosition[0],r])
  return positionAndTrial
};

SudArray.prototype.checkRow = function(position,startNumber) {
  let answerToCheckRow =[]
  for (let j = startNumber; j<10; j++){  //tries startNumber-9 in turn to find the lowest missing number
    let count = 0
    for (let i=(parseInt(position/9))*9; i<((parseInt(position/9))*9)+9; i++) {  
      //compares 1-9 against each of the elements in the row
      if (this.grid[i] === j) {
        count = 1;  //if it finds a 1-9 the count set to 1
        }
      }
    if (count === 0) {  // if it hasn't found a 1-9 in all the positions in the 
      answerToCheckRow.push(j);          //row it returns the 1-9
    }
  };
return answerToCheckRow[0]  
};

SudArray.prototype.checkColumn = function(position,startNumber) {
  for (let j = startNumber; j<10; j++){  //tries startNumber-9 in turn to find the lowest missing number
    let count = 0
    for (let i=(position%9); i<81; i=i+9) {  
      //compares 1-9 against each of the elements in the column
      if (this.grid[i] === j) {
        count = 1;  //if it finds a 1-9 the count set to 1
        }
      }
    if (count === 0) {  // if it hasn't found a 1-9 in all the positions in the 
      return j          //row it returns the 1-9
    }
  };
};







