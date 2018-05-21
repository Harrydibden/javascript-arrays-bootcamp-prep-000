var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ...array];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array, element];
  return newArr;  
}

function destructivelyAddElementToEndOfArray(array, element) {

}

function accessElementInArray(array, index) {
  return array[index];
}