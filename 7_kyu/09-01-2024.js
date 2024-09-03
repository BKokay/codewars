//Params: and array with Like or Dislike
//Returns: Like, Dislike, or Nothing
//Example: [Like, Dislike] -> Dislike; [Like, Dislike, Dislike] -> Nothing
//Pseudocode: Take in a list of enums, loop through the list. If enum is equal to the enum before it or after it, it will cancel itself out and return nothing. Otherwise, it will return the last enum.

const returns = Object.freeze({
  LIKE: "LIKE",
  DISLIKE: "DISLIKE",
  NOTHING: "NOTHING",
});

function likeOrDislike(buttons) {
  let state = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = "Nothing";
    } else {
      state = buttons[i];
    }
  }
  return state;
}
const el = [returns.LIKE, returns.DISLIKE];
const result = likeOrDislike([returns.LIKE, returns.DISLIKE]);
console.log(result);
