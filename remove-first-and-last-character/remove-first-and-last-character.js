function removeChar(str){
    let arr = str.split("")
    arr.shift()
    arr.pop()
    return arr.join("")
};
