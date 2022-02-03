function sumTwoSmallestNumbers(numbers) {  
    decreaseArr=numbers.sort(function(a,b){return a-b});
    return decreaseArr[0]+decreaseArr[1];
  }