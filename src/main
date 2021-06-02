export default function Translate(inputNumber) {
  this.inputNumber = inputNumber;
}

Translate.prototype.checkInput = function() {
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

Translate.prototype.isItRoman = function(totalNumber) {
//  let romanArray = ["I","V","X","L","C","D","M","V̅","X̅","L̅","C̅","D̅","M̅" ];
  totalNumber = 0;
  let y = this.inputNumber.split("");
  let count = 0;
  for(let i = 0; i<y.length; i++) {
    count = 0;
    for(let j = 1; j<4; j++) {
      if(y[i]===y[i+j]) {
        count = count +1;
        if(count>2) {
          totalNumber = "Too many characters in a row";
        }
      }
    }
  }
  return totalNumber;
};

Translate.prototype.translateRoman = function() {
  let totalNumber = 0;
  let romanArray = ["I","V","X","L","C","D","M","V̅","X̅","L̅","C̅","D̅","M̅" ];
  let arabicArray = [1,5,10,50,100,500,1000,5000,10000,50000,100000,500000,1000000];
  
  let subTotal = [];
  let count = 0;
  let fiveCount =0
  let y = 0;
  y = this.inputNumber.split("");
  //this.isItRoman()
  if (totalNumber ===0) {  //character check.  If Roman adds arabic translation to subTotal
    for (let i=y.length-1; i>-1; i--){
      count = 0;
      for(let j=0; j<romanArray.length; j++){
        if(y[i]===romanArray[j]) {
          count = count+1;
          subTotal.push(arabicArray[j]);
          if((y[i-1]===y[i]) && ((j+1)%2)===0) {  
            //if character the same as the previous and it is V,L, D etc
            totalNumber = i;//&"s in a row"
            return totalNumber;
          }
        }
      }
      if (count ===0) {
        totalNumber =  "Not a correct Roman Numeral";
        return totalNumber;
      }
    }
  }  
  if(totalNumber===0){  //adds up subtotal array
    if(y.length>1){  
      for(let i = 0; i<subTotal.length-1; i++){
        if(subTotal[i]>subTotal[i+1]) {
          subTotal[i+1]= subTotal[i] - subTotal[i+1];
          subTotal[i]= 0;
        }
        totalNumber = subTotal.reduce(function(a, b){
          return a + b;
        }, 0);
      }
    }
    else {
      totalNumber = subTotal[0];
    }
  }  
  return totalNumber;
};

Translate.prototype.translateArabic = function() {
  let romanArray = ["I","V","X","L","C","D","M","V̅","X̅","L̅","C̅","D̅","M̅" ];
  let totalNumeral = "";
  let endNumeral = "";
  let numeral = "";
  let y = this.inputNumber;
  //let z;
  for(let k=6;k>0;k=k-1) {  
    for(let m=0;m<4;m++){
      if(y>=10**k)  {
        if (Math.trunc(y/((10**k)*5))>=2) {
          numeral = numeral+ romanArray[((k*2)+2)];
          y=y-10*(10**k);
        }
        else if (Math.trunc((y+(10**k))/((10**k)*5))===2) {
          numeral = numeral +romanArray[((k*2))] + romanArray[((k*2)+2)];
          y=y-9*(10**k);
        }
        else if (Math.trunc(y/((10**k)*5))===1) {
          numeral = numeral+ romanArray[((k*2)+1)];
          y=y-5*(10**k);
        }
        else if (Math.trunc((y+(10**k))/((10**k)*5))===1) {
          numeral = numeral +romanArray[((k*2)+0)] + romanArray[((k*2)+1)];
          y=y-4*(10**k);
        }
      }
    }  
  }    
  for(let h=0;h<y;h++){ 
    if(y >=1 ) {
      if (Math.trunc(y/(1*5))>=2) {
        numeral = numeral+ romanArray[2];
        y=y-10;
      }
      else if(Math.trunc((y+1)/(1*5))===2) {
        numeral = numeral + romanArray[0]+romanArray[2];
        y=y-9;
      }
      else if(Math.trunc(y/5)===1) {
        numeral = numeral + romanArray[1];
        y=y-5;
      }
      else if(Math.trunc((y+1)/5)===1) {
        numeral = numeral + romanArray[0]+romanArray[1];
        y=y-4;
      }
    }  
  }  
  let digitRemainder = this.inputNumber % 5;  // makes endNumeral I, II or III
  for(let i=0; i<4; i++){
    if(digitRemainder === i){
      for(let j=0; j<i; j++){
        endNumeral=endNumeral+"I";
      }
    }
    totalNumeral = numeral + endNumeral;   
  }  
  return totalNumeral;  
};