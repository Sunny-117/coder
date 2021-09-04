var selfDividingNumbers = function (left, right) {
    let arr = [];
    if (right <= 10) {
        for (let i = left; i < right; i++) {
            arr.push(i)
        }
    }
    return arr;
};
console.log(selfDividingNumbers(1, 10));