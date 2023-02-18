//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x){
    let lc = x.toLowerCase(); 
    let reverse = lc.split("").reverse().join("");
    if(lc === reverse){
        return true;
    }else{
        return false;
    }
}

check = "aba"
check2 = "brittany"

isPalindrome(check)
isPalindrome(check2)