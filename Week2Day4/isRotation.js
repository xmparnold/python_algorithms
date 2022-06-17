/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

function rotateString( str, num ) {


    var curval = 0;
    var rotatedstring = []
    var newnum = 0;

    if (num > str.length) {
        newnum = (num % str.length);
    }
    else {
        newnum = num;
    }

   
    for ( var x = 0; x < str.length; x++) {
        console.log(rotatedstring)
        curval = str[x];
        if (x + newnum >= str.length) {
            var newindex = (x + newnum) - str.length;
            rotatedstring[newindex] = curval;
        }
        else {
            rotatedstring[x + newnum] = curval;
        }
    }
    console.log(rotatedstring);
    return rotatedstring.join('');
}

console.log(rotateString(str, rotateAmnt1));
console.log(rotateString(str, rotateAmnt2));
console.log(rotateString(str, rotateAmnt3));
console.log(rotateString(str, rotateAmnt4));
console.log(rotateString(str, rotateAmnt5));