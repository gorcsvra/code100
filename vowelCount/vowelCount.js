function getCount(str) {
    var vowelsCount = 0;
    // enter your majic here
     const vowels = ['a','e','i','o','u'];
    for(let char of str){
      if(vowels.includes(char)){
      vowelsCount++
    }
    }
    return vowelsCount;
  }

  //  1, A probléma megoldásához létrehozunk egy vowelsCount változót,
  //   amely nyomon követi, hogy hány magánhangzó van a karakterláncban.
 // 2,Létrehozunk a vowels tömböt is, magánhangzókat, amelyekben az összes magánhangzónk megtalálható. 
  //Végigmegyünk a karakterláncunk minden egyes karakterén for ciklussal.
   //Ha a karakter magánhangzó, akkor növeljük a vowelsCountváltozónkat.

   
   
  
  

  