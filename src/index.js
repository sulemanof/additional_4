module.exports = function multiply(first, second) {
    var num1 = first.split('').reverse();
    var num2 = second.split('').reverse();
    var res = [];

    for (var i = 0; num1[i] >= 0; i++) {
        for (var j = 0; num2[j] >= 0; j++) {

            if (!res[i + j]) res[i + j] = 0;
            res[i + j] += (num1[i] * num2[j]);
        }
    }
    for (var k = 0; res[k] >= 0; k++) {
        if (res[k] >= 10) {
            if (!res[k + 1]) res[k + 1] = 0;
            res[k + 1] += parseInt(res[k] / 10);
            res[k] = res[k] % 10;
        }
    }
    var solution = res.reverse().join('');
    return solution;
}
