const correctUser = "ClintZZX"
const correctPass = "zhz028338"

var LogInCheck = function(user, pass){
    const toTest = user.toLowerCase()
    if(toTest !== correctUser.toLowerCase()){
        return false
    }else{
        if(pass === correctPass){
            return true
        }else{
            return false
        }
    }
}

console.log(LogInCheck("clintzzx","zhz028338"))