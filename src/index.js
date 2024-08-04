module.exports = function toReadable(number) {
    const numArr = number.toString(10).split("");
    const numbsUpTo19 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    } else if (number > 0 && number < 20) {
        return numbsUpTo19[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return tens[numArr[0]];
        } else {
            return `${tens[numArr[0]]} ${numbsUpTo19[numArr[1]]}`;
        }
    } else if (number >= 100 && number < 1000) {
        if (number % 100 == 0) {
            return `${numbsUpTo19[numArr[0]]} hundred`;
        } else if (number % 10 == 0) {
            return `${numbsUpTo19[numArr[0]]} hundred ${tens[numArr[1]]}`;
        } else if (numArr[1] == 1) {
            const lastTwo = numArr[1] + numArr[2];
            return `${numbsUpTo19[numArr[0]]} hundred ${numbsUpTo19[lastTwo]}`;
        } else if (numArr[1] == 0) {
            return `${numbsUpTo19[numArr[0]]} hundred ${
                numbsUpTo19[numArr[2]]
            }`;
        } else {
            return `${numbsUpTo19[numArr[0]]} hundred ${tens[numArr[1]]} ${
                numbsUpTo19[numArr[2]]
            }`;
        }
    }
};
