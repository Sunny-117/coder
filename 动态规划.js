var numWays = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    } else if (n >= 2) {
        return numWays(n) + numWays(n - 1)
    }
};