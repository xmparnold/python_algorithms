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

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */


function encodeStr(str) {
  let temp = "";
  let count = 1;
  for(let i = 0; i < str.length; i++) {
      if(str[i] == str[i+1]) {
        count++;
      }
      else { 
        temp += str[i];
        temp += count;
        count = 1;
      }
    }
  return temp;
}



console.log(encodeStr(str1));





// Another solution:
// function encodeStr(str) {
//   let encoded = "";
//   let count = 0;
//   if (str.length > 1) {
//       for (let i = 0; i < str.length; i++) {
//           if (i != 0 && str[i] == str[i - 1]) {
//               count++;
//               if (i == str.length - 1) {
//                   encoded += RLE(str[i - 1], count + 1);
//                   count = 0;
//               }
//           } else if (i != 0) {
//               encoded += RLE(str[i - 1], count + 1);
//               count = 0;
//           }
//       }
//   } else if (str.length == 1) {
//       return str;
//   } else {
//       return "your mom lol";
//   }
//   return encoded;
// }

// function RLE(c, count) {
//   let str = "";
//   if (count >= 3) {
//       str += c + count;;
//   } else {
//       while (count > 0) {
//           str += c;
//           count--;
//       }
//   }
//   return str;
// }
