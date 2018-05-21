var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
    arr = arr.unshift(el);
    return arr.unshift(el);
}

function addElementToEndOfArray(arr, el) {
  return arr.push(el);
}

function destructivelyAddElementToEndOfArray() {
  arr = arr.push(el);
  return arr;
}