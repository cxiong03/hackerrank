// array nums of n numbers
// function must find and return the second largest number in nums
// if nums[i] is greater than what's in secondLargestNum we increment but if its lower then 6 break

// My initial soltion

// function getSecondLargest(nums) {
//     let secondLargestNum = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] > secondLargestNum) secondLargestNum +=1;
//     }
//         if (secondLargestNum < 6)
//         console.log(secondLargestNum)
//         return secondLargestNum;
// }

// getSecondLargest([2, 3, 6, 6, 5]);

// Reviewed solution
function getSecondLargest(nums) {
    let largestValue = nums[0];
    let secondLargestValue;

    for (var i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        if(currentNum > largestValue) {
            secondLargestValue = largestValue;
            largestValue = currentNum;
        } else if (currentNum < largestValue && currentNum > secondLargestValue) {
            secondLargestValue = currentNum;
        }
    }
    return secondLargestValue;
}
getSecondLargest([2, 3, 6, 6, 5]);