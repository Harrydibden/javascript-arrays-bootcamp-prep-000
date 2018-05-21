var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ...array];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array, element];
  return newArr;  
}

function destructivelyAddElementToEndOfArray(array, element) {
    return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArr = array.slice();
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(array.length - 1);
}