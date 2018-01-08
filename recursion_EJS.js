function isEven(num){
    if (num >= 0){
        if (num === 0){
            return true;
        } else if (num === 1){
            return false;
        } else {
          return isEven((num - 2));
        }
        
    } else {
      return isEven((num + 2));
         }
}

console.log(isEven(-0));
