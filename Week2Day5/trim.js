/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */


function trim(str) {
    let new_str = "";
    for(x=str.length - 1; x>0; x--) {
        if(str[x] == " ") {
            continue;
        }
        else {
            for(y=0;y<str.length;y++) {
                if(str[y] == " ") {
                    continue;
                }
                else {
                    while(y<=x) {
                        new_str += str[y];
                        y++;
                    }
                    return new_str;
                }
            }
        }
    }
}
