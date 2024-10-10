// Two sum

// Exapmle 1
// Given nums = [2, 7, 11, 15], 
// target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9, 
// return [0, 1].


var TwoSum = function (num, target){ 
    for (let i = 0; i < num.length; i++) {
        for (let j=i+1; j<num.length; j++) {
            if (num[i] +num[j] == target){
                return [i, j]
            }
            
        }
        
    }
}
console.log(TwoSum([2, 7,11,15],9))





// The parseInt method parses a value as a string and returns the first integer.



// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//  Output: 7 -> 0 -> 8 
// Explanation: 342 + 465 = 807.
let a1 = [2, 4, 3];
let a2 = [5, 6, 4];

var addTwoNumber = function (a1, a2) {
  a1 = a1.reverse().join("");
  a2 = a2.reverse().join("");
  let a3 = parseInt(a1) + parseInt(a2);
  return a3
    .toString()
    .split(" ")
    .reverse()
    .map((ele) => {
      return Number(ele);
    });
};
console.log(addTwoNumber(a1, a2));


