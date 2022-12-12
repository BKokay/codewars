//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s){
    originalString = s;
    newString = originalString.replace(/!/g, '')
    return newString
}