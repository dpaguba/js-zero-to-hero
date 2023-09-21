function longestRepetition(s) {
  if(s.length == 0){
    return ["",0];
  }else{
    let currentLetter = s.charAt(0);
    let counter = 1;
    let resultLetter;
    let resultCounter = 0;
    for(let i = 1; i < s.length; i++){
      if (currentLetter === s.charAt(i)) {
        counter++
      }else if (currentLetter !== s.charAt(i)) {
        if (resultCounter < counter) {
          resultLetter = currentLetter
          resultCounter = counter
        }
        currentLetter = s.charAt(i)
        counter = 1
      }
    }
    return resultCounter < counter ? [currentLetter, counter] : [resultLetter, resultCounter]
  }
}
