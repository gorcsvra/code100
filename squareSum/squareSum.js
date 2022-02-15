function squareSum(numbers){
    let total=0,
       map1 = numbers. map(item => item * item);
      
      for (let i=0;
           i < map1.length; i++) {
        total += map1[i]
        }
    return total
    }