//import $ from 'jquery';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
export default function SudArray(first,second,third,fourth,fifth,sixth,seventh,eighth,nineth) {
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
  this.fifth = fifth;
  this.sixth = sixth;
  this.seventh = seventh;
  this.eighth = eighth;
  this.nineth = nineth;
}

const line1arraySudoku = new SudArray(5,3,0,0,7,0,0,0,0);
const line2arraySudoku = new SudArray(6,0,0,1,9,5,0,0,0);
const line3arraySudoku = new SudArray(0,9,8,0,0,0,0,6,0);
const line4arraySudoku = new SudArray(8,0,0,0,6,0,0,0,3);
const line5arraySudoku = new SudArray(4,0,0,8,0,3,0,0,1);
const line6arraySudoku = new SudArray(7,0,0,0,2,0,0,0,6);
const line7arraySudoku = new SudArray(0,6,0,0,0,0,2,8,0);
const line8arraySudoku = new SudArray(0,0,0,4,1,9,0,0,5);
const line9arraySudoku = new SudArray(0,0,0,0,8,0,0,7,9);

SudArray.prototype.pushIntoArray = function(position) {
 
    this.first[5] = 1; //+line2arraySudoku[i]+line3arraySudoku[i]+line4arraySudoku[i]+line5arraySudoku[i]+line6arraySudoku[i]+line7arraySudoku[i]
    //+line8arraySudoku[i]+line9arraySudoku[i]
    return this.first
};

SudArray.prototype.findNextBlank = function() {
  /*for (let i=0; i<9; i++) {
    if (line1arraySudoku.first[i] === 0) {
      return i;
    }  
  }*/
  return this.first[2]
}



