var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  return arr.unshift(el);
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
    return arr.unshift(el);
}

function addElementToEndOfArray(arr, el) {
  return arr.push(el);
}

function destructivelyAddElementToEndOfArray() {
  arr = arr.push(el);
  return arr;
}