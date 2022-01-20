function getCount(str) {
    var vowelsCount = 0;
    let count=str.length;
    // enter your majic here
     const vowels = ['a','e','i','o','u'];
    for(let char of str){
      if(vowels.includes(char))
      vowelsCount++
      return vowelsCount;
    }
  }

    

  