// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(arr) {
  let string = "";
  let other = arr.map((e) => (string += e));
  console.log(string);
  console.log(other);
}

spacey(["i", "have", "no", "space"]);
