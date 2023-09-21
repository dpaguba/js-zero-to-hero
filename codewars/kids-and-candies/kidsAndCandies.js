function findLeastCommonMultiple(number1, number2, multiplied){
    if (number1 === 0) {
        return multiplied / number2
    }
    if (number2 === 0) {
        return multiplied / number1
    }
    return (number1 > number2) ? 
        findLeastCommonMultiple(number1 % number2, number2, multiplied) : 
        findLeastCommonMultiple(number1, number2 % number1, multiplied)
}

function candiesToBuy(kids){
    if (kids === 1) {
        return 1
    }else{
        let res = findLeastCommonMultiple(kids, kids - 1, kids * (kids - 1))
        while (kids !== 1){
            res = findLeastCommonMultiple(res, kids - 1, res * (kids - 1))
            kids--
        }
        return res
    }
}
