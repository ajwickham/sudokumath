//import $ from 'jquery';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
export default function SudArray(grid,solution) {
  this.grid = grid;
  this.solution = solution;
}

const fullArraySudoku = new SudArray([5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,
  0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9]);

let blankPosition = []  

SudArray.prototype.pushIntoArray = function(position) {
    this.grid[5] = 1; 
};

/*SudArray.prototype.retryEarlierNumbers = function(problemPosition) {
  let x;
  let y;
  for (let j = problemPosition-1; j>-1; j--) {  //j is the previous blank position 
    for(let k = 1; k<9; k++){
      x = findNumberToTry(j,(this.solution[j]+k)); //tries a number higher than found before
      if(x !=10){
        this.solution[j]=x; //if there is a higher number, sets that higher number
        for (let m = 1; m < )
        y=this.findNumberToTry(j+1,1) 
        return
      };

    }
  }
};*/

SudArray.prototype.buildSolution = function() {
  blankPosition = this.findBlanks();
  this.startSolution();
  let x;
  let k = 1;
  for (let i = 0; i<blankPosition.length; i++) {  //loops through all the positions
    x = this.findNumberToTry(i,k)
    if (x[1]===10) {
      i = i-2;
      k=k+1
    }
    //if the number comes back as 10 there is a problem with a previous trial number.
    //need to go back, and try a higher number on the previous blank. And then the previous 
    //blank and so on all the way back to the first blank
    
    else {
    this.solution[blankPosition[i]]=x[1];
    }
  }
  return this.solution
};


SudArray.prototype.findBlanks = function() {
  blankPosition = []
  for (let i=0; i<81; i++) {
    if (this.grid[i] === 0) {
      blankPosition.push(i);
    };
  };
  return blankPosition
};

SudArray.prototype.startSolution = function() {
  for (let i=0; i<this.grid.length; i++) {
    this.solution[i] = this.grid[i]
  };
};

SudArray.prototype.findNumberToTry = function(count,r) {
  blankPosition = this.findBlanks();
  let q;
  let s;
  for (let i=r; i<11; i++) {
    q = this.checkRow(blankPosition[count],r);      //tries a 1, comes back with lowest row
    s = this.checkColumn(blankPosition[count],q);   //puts that in to find lowest column
    r = this.checkColumn(blankPosition[count],s)    //then puts that to find lowest in square.
                                                    //sets to repeat finding if lowest
                                                    /*column works for lowest row and square. 
                                                  If not finds next lowest row and next lowest
                                                      column. Process is repeated up to 9 times*/
    
    if(i<r) {i=r};
  }                                                       
  let positionAndTrial = []
  positionAndTrial.push(blankPosition[count],r)
  return positionAndTrial
};

SudArray.prototype.checkRow = function(position,startNumber) {
  let count
  for (let j = startNumber; j<11; j++){  //tries startNumber-9 in turn to find the lowest missing number
    count = 0
    for (let i=(parseInt(position/9))*9; i<((parseInt(position/9))*9)+9; i++) {  
      //compares 1-9 against each of the elements in the row
      if (this.solution[i] === j) {
        count = 1;  //if it finds a 1-9 the count set to 1
      }
    }
    if (count === 0) {              // if it hasn't found a 1-9 in all the positions in the 
      return j                      //row it returns the 1-9
    }                                //if it hasn't found any possible 1-9 then it returns a 10       
  };
};

SudArray.prototype.checkColumn = function(position,startNumber) {
  for (let j = startNumber; j<11; j++){  //tries startNumber-9 in turn to find the lowest missing number
    let count = 0
    for (let i=(position%9); i<81; i=i+9) {  
      //compares 1-9 against each of the elements in the column
      if (this.solution[i] === j) {
        count = 1;  //if it finds a 1-9 the count set to 1
        }
      }
    if (count === 0) {  // if it hasn't found a 1-9 in all the positions in the 
      return j          //row it returns the 1-9
    }
  };
};
SudArray.prototype.checkSquare = function(position,startNumber) {
  let k = 1
  let count = 0;
  let col = Math.trunc((position%9)/3);
  let ro = Math.trunc(Math.trunc(position/9)/3);
  let square = col*3 + (ro*3*9);
  for (let k =startNumber; k<11; k++)  { //tries startNumber-9 in turn to find the lowest missing number
    count = 0
    for (let i=square; i<(square+21); i=i+9) {  
      for(let j=0; j<3; j++) {
    //compares 1-9 against each of the elements in the column
        if (this.solution[(i+j)] === k) {
          count = 1;  //if it finds a 1-9 the count set to 1
        }
      }
    }
    if (count === 0) {  // if it hasn't found a 1-9 in all the positions in the 
      return k          //square it returns the 1-9
    }
  }    
};






