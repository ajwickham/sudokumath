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

SudArray.prototype.checkInput = function() {
  let xxx = 0;
  if(isNaN(this.inputNumber)) {
    let yyy = this.isItRoman();
    if(yyy===0){
      xxx = this.translateRoman();
    }  
  }
  else {
    xxx = this.translateArabic();
  }
  return xxx;
};



