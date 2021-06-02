export default function SudArray(inputNumber) {
  this.inputNumber = inputNumber;
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



