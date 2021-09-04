var fib = function (n) {
    if (n == 0) return 0;
    else if (n == 1 || n == 2) return 1;
    else {
        let first = 1,
            second = 1,
            third;
        for (let i = 2; i < n; i++) {
            third = first + second;
            first = second;

            second = third;
        }
        return third;
    }
};
console.log(fib(2)) //1
console.log(fib(5)) //5