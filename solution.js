function allLongestStrings(inputArray) {
    var len = 0; 
    var longest = []; 
    
    for (var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > len){
            var lgth = inputArray[i].length 
        }
    }
    for (var j = 0; j < inputArray.length; j++){
        if(inputArray[j].length === len){
            longest.push(inputArray[j])
        }
    }
    return longest 
}
