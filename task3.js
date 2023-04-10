//3

// /It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){

    let arr = []

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        arr.push(element)
    }

    arr.pop()
    arr.shift()

    
    return (arr.join(''));


};

removeChar('Firdavs')
