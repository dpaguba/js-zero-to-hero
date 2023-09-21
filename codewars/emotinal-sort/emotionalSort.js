let emotions = [":D", ":)", ":|", ":(", "T_T"]

function sortEmotions(arr, order){
    return arr.sort((a, b)=> order
    ? emotions.indexOf(a) - emotions.indexOf(b)
    : emotions.indexOf(b) - emotions.indexOf(a))
}
