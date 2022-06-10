/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a1";

const str4 = "bbcc";
const expected4 = "b2c2";

/* 
  String Decode  
*/

const str5 = "a20b2cd3";
const expected5 = "aaaaaaaaaaaaaaaaaaaabbcddd";

const str6 = "a3b2c12d";
const expected6 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    let decoded = "";
    let numstr = "";
    let char = "";
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) || parseInt(str[i]) == 0) {
            numstr += str[i];
            char = str[i - numstr.length];
            if (i == str.length - 1) {
                decoded += decodeRLE(char, numstr);
            }
        } else if (i != 0) {
            if (numstr == "") {
                decoded += str[i - 1];
            } else {
                decoded += decodeRLE(char, numstr);
            }
            numstr = "";
            if (i == str.length - 1) {
                decoded += str[i];
            }
        }
    }
    return decoded;
}

function decodeRLE(c, numstr) {
    let newstr = ""
    for (let i = 0; i < parseInt(numstr); i++) {
        newstr += c;
    }
    return newstr;
}

console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));

console.log(decodeStr(str5));
console.log(decodeStr(str6));