var anagram = function(word, caseSensitive){
    
    if(typeof(word) !== "string"){
        console.log("Your input should be a string")
        return false
    }

    let toTest

    if(caseSensitive){
        word2 = word
    }else{
        word2 = word.toLowerCase()
    }


    var spell = word2.split("")
    var reverse = spell.reverse()
    var word3 = reverse.join("")
    if(word2 === word3){
        return true
    }else{
        return false
    }
    
}

console.log(anagram("Mom",true))