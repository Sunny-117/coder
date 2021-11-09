
/*
从开始到结尾
var canJump = function (nums) {
    const totalLength = nums.length;
    const memo = Array(totalLength).fill(0)

    memo[totalLength - 1] = 1;
    function jump(position) {
        if (memo[position] === 1) {
            return true;
        } else if (memo[position] === -1) {
            return false;
        }
        const maxJump = Math.min(position + nums[position], totalLength - 1)
        for (let i = position + 1; i < maxJump; i++) {
            const jumpResult = jump(i)
            if (jumpResult === true) {
                memo[position] = 1;
                return true;
            }
        }

        memo[position] = -1;
        return false;
    }
} */

// 从结尾到头

// var canJump = function (nums) {
//     const totalLength = nums.length;
//     const memo = Array(totalLength).fill(0)

//     memo[totalLength - 1] = 1;

// }


// 1, 将数组中的区间按照起始位置排序
// 2.用curr数组记录当前合并的最大区间,
//     遍历数组中的每一个区间, 如果当前区间
// 9起始位置小于curr的终点位置, 则可以继续合并, 所以合并并史新curr的起始和终止位置。如果当前区间的起始位置大于urr的终止位置, 则无法合并。所以将 aurrh入到result里, 并用当前的区间 n换curr的值.
var merge = function (intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let curr = intervals[0]
    let result = []
    for (const interval of intervals) {
        if (cur[1] >= interval[0]) {
            curr[1] = Math.max(cur[1], interval[1])
        } else {
            result.push(curr)
            curr = interval;
        }
    }
    if (curr.length !== 0) {
        result.push(curr)
    }
    return result;
}
