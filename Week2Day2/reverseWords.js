/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */


// reverse using split and join methods
function reverseWords(str) {
    var splitstrings = [];
    var reversed = "";

    if (str.includes(" ")) {
        splitstrings = str.split(" ");
        for (var x = 0; x < splitstrings.length; x++) {
            var newstring = splitstrings[x].split("").reverse().join("");
            reversed += newstring + " ";
        }
    }
    else {
        var reversed = str.split("").reverse().join("");
    }
    return reversed;
}




// reverse words without using split or join

function reverseWordsNoSplit(str) {
    var splitstrings = [];
    var reversed = "";
    var tempstring = ""

    if (str.includes(" ")) {
        for (var x = 0; x < str.length; x++) {
            if (str[x] != " ") {
                tempstring += str[x];
            }
            if (str[x] === " " ||  x === str.length - 1) {
                splitstrings[splitstrings.length] = tempstring;
                tempstring = "";
            }
        }
        console.log(splitstrings);
        for (var x = 0; x < splitstrings.length; x++) {
            var splitreversed = reverseString(splitstrings[x]);
            reversed += splitreversed + " ";
        }
    }
    else {
        reversed = reverseString(str);
    }
    return reversed;
}


// reverse single string function for use in the reverseWordsNoSplit() function

function reverseString(str) {
    var reversed = "";
    for (var x = str.length - 1; x >= 0; x--) {
        reversed += str[x];
    }
    return reversed;
}

console.log(reverseWordsNoSplit(str3));