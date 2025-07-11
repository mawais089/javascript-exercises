const fibonacci = function (num) {

    let count;

    if (num < 0) return "OOPS";

    if (typeof num !== 'number') {
        count = parseInt(num);
    }
    else{
        count = num;
    }

    let fib = [0,1];

    for (let i = 2; i <= count; i++){
        fib[i] = fib[i - 1] + fib [i - 2]
    }
    return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
