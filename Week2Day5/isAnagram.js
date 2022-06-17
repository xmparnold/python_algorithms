/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    
    s1 = s1.toUpperCase();
    s2 = s2.toUpperCase();

    var newdict1 = {};
    var newdict2 = {};

    if (s1.length == s2.length) {
        for (var x = 0; x < s1.length; x++) {
            var curval1 = s1[x];
            var curval2 = s2[x];

            if (curval1 in newdict1) {
                newdict1[curval1]++;
            }
            else {
                newdict1[curval1] = 1;
            }

            if (curval2 in newdict2) {
                newdict2[curval2]++;
            }
            else {
                newdict2[curval2] = 1;
            }
        }

        for (key in newdict1) {
            if (newdict1[key] != newdict2[key]) {
                return false;
            }
            else {
                continue;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));