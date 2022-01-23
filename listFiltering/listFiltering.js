function filter_list(list) {
    // Return a new array with the strings filtered out
  
   return list.filter(justNumber => typeof justNumber == "number")
  }