function countDifferences(str1, str2){
    let counter = 0;
    for(let i = 0; i < str1.length; i++){
        if(str1.charAt(i) !== str2.charAt(i)){
            counter++
        }
    }
    return counter
}

function trimString(str){
    let arr = str.split("")
    arr.shift()
    return arr.join("")
}

var mispelled = function(word1, word2){
    if (word1 !== word2) {
        if (Math.abs(word1.length - word2.length) > 1) {
            return false
        }else{
            if (word1.length === word2.length) {
                return countDifferences(word1, word2) < 2
            }else{
                if (word1.length > word2.length && word1.charAt(0) != word2.charAt(0)){
                    word1 = trimString(word1)
                }else if (word1.length < word2.length && word1.charAt(0) != word2.charAt(0)) {
                    word2 = trimString(word2)
                }
                return countDifferences(word1, word2) < 1
            }
        }
    }
    return false
}

console.log(mispelled('versed', 'xersed')); //true
console.log(mispelled('versed', 'versed1')); // true
console.log(mispelled('versed', 'applb')); // false
console.log(mispelled('versed', 'aversed')); // true
console.log(mispelled('versed', 'aaversed')); // false
