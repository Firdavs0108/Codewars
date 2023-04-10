


// /////////////////////////////////////////////////4
// /Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    let str = ''

    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        if(element!==' '){
             str+=element 
        } 
    }

    return str
    }

    noSpace('   book      firdavs    ')

