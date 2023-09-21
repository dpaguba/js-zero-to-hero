function countParentheses(str){
    let counter = 0;
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (counter == 0 && arr[i] == ")") {
            counter--
            break
        }else{
            arr[i] == "(" ? counter++ : counter--
        }
    }
    return counter
}

function validParentheses(parenStr) {
    if(parenStr.length === 0){
        return true
    }else if (parenStr.length > 0 
        && parenStr.length <= 100 
        && (parenStr.length % 2) == 0) {
            if(parenStr.startsWith(")" || parenStr.endsWith("("))){
                return false
            }else{
                return countParentheses(parenStr) == 0
            }
    }else{
        return false
    }
}
