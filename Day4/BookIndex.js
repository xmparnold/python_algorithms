/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
    var tempstring = "";
    var finalvalue = [];
    // if(nums.length < 2){
    //     push
    // }
    for(var x = 0; x < nums.length - 2; x++) {
        // for(var y = 1; y < nums.length - 1; y++) {
        //     if(nums[x] + 1 == nums[y]) {
        //         currentvalue = nums[x];
        //         finalvalue = nums[y];
        //         for(var i = y; i < nums.length - 1; y++) {
        //             if(nums[i] == currentvalue + 1){
        //                 currentvalue++;
        //                 finalvalue = nums[i];
        //             }
        //             else {
        //                 tempstring += (currentvalue + "-" + finalvalue + ",");
                        
        //             }
        //         }
        //     }
            // else {
            //     tempstring += nums[x];
            // }
        // }
        finalvalue.push(nums[x]);
        if(nums[x] + 1 == nums[x+1]) {
            finalvalue.push(nums[x]);
        }
        else {
            if(finalvalue.length < 2) {
                tempstring += nums[x] + ", ";
                finalvalue = [];
            }
            else {
                tempstring += finalvalue[0] + "-" + finalvalue[finalvalue.length - 1] + ", ";
                finalvalue = [];
            }
        }
    }
    return tempstring
}



console.log(bookIndex(nums2))