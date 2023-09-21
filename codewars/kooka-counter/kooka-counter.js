var kookaCounter = function(laughing) {
  let counter = laughing.length > 0 ? 1 : 0
  let sex = laughing.charAt(0) === "h" ? 0 : 1
  for (let i = 0; i < laughing.length; i = i+2) {
    if(sex == 0 && laughing.charAt(i) == "H"){
      counter++
      sex = 1;
    }else if (sex == 1 && laughing.charAt(i) == "h"){
      counter++
      sex = 0;
    }
  }
  return counter
}
