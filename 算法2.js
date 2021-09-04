// nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 二分查找
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    if (mid == target) {
        return nums[mid]
    }
    while (left <= right) {

    }
};
var nums = [1, 2, 3, 4, 5]
console.log(search(nums, 3))