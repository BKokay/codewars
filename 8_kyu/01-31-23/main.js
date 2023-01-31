// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
// a = 097 ; e = 101 ; i=105 ; o=111 ; u=117
//P: takes in an array of three diget numbers
//R: return the array with vowel-strings replacing their character codes 
//E: [101,121,110,113,113,103,121,121,101,107,103] --> ["e",121,110,113,113,103,121,121,"e",107,103]
//P: iterate through the array using forEach() from stackoverflow example: arr.forEach((item, i) { if (item == 097) arr[i] = "a"; })

function isVow(a){
    a.forEach((item, i) => {
        switch(item){
            case 097:
                a[i] = "a";
                break;
            case  101:
                a[i] = "e";
                break;
            case 105: 
                a[i] = "i";
                break;
            case 111: 
                a[i] = "o";
                break;
            case 117:
                a[i] = "u";
                break;
        }
    })
    return(a)
}

isVow([101,121,110,113,113,103,121,121,101,107,103])