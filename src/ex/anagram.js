var anagram = function(word){
    var word2 = word.toLowerCase()
    var spell = word2.split("")
    var reverse = spell.reverse()
    var word3 = reverse.join("")
    if(word2 === word3){
        return true
    }else{
        return false
    }
}

console.log(anagram("Mom"))