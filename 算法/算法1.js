// // Map
// const mp1 = new Map([
//     ["a", 1],
//     ["b", 3]
// ])
// // console.log(typeof mp1)
// // console.log(mp1.size)
// // console.log(mp1.get('a'))
// mp1.forEach((value, key, mp1) => {
//     console.log(value, key, mp1)
// })
var toSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i);
        }
    }
    return []
}
console.log(toSum([1, 2, 3, 1, 1, 1, , 4, 4], 7))