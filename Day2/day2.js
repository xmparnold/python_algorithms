// /* 
//   String: Reverse
//   Given a string,
//   return a new string that is the given string reversed
// */

const str1 = "creature";
const expectedd1 = "erutaerc";

const str2 = "dog";
const expectedd2 = "god";

const str3 = "hello";
const expectedd3 = "olleh";

const str4 = "";
const expectedd4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * - @param {string} str String to be reversed.
 * - @returns {string} The given str reversed.
 */

function reverseString(str) {
    // create a newString to hold the reversed string
    var newString = ""
    // for loop to go through the entire string starting from the last index and going in reverse
    for (var x = str.length - 1;x >= 0;x--) {
        // add the current index's value to the end of the newString
        newString += str[x];
    }
    // console log the newString result
    return newString;
}

console.log(reverseString(str1));




/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    // newString will hold the string we build from the array
    var newString = "";
    // for loop to go through the whole array
    for (var x = 0; x < arr.length; x++) {
        // add current index value from array to end of newString followed by any given separator
        newString += (arr[x] + separator)
    }
    // check to see if there was a separator 
    if (separator != "") {
        // if there was, then here we slice off the end of the string to make sure there are no trailing seperators
        newString = newString.slice(0,-(separator.length))
    }
    // console log the newString
    return newString;
}

console.log(join(arr2, separator2));