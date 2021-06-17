// const checkhundred = function (number) {
//     if (number > 100) {
//         return "true";
//     }
//     return "false";
// };

// const result1 = checkhundred(200);
// console.log(result1);

// // function that produce something

// const entry = function (maxpeople, currentpeople, age) {
//     const entryallowed = maxpeople - currentpeople;
//     if (age < 18) {
//         return "This is a club for adults";
//     } else if (entryallowed <= 0) {
//         return "it's too busy now, come back later";
//     } else if (entryallowed > 0) {
//         return "come in";
//     }
// };

// const result2 = entry(20, 30, 25);
// console.log(result2);

// // function that produce something

const average = function (number1, number2, number3, number4, number5) {
    const sum = number1 + number2 + number3 + number4 + number5
    return sum / 5;
}

const result3 = average(3, 5, 5, 5, 2);
console.log(result3);
