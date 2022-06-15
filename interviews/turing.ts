// A digit-only keyboard contains all 10 digits from o to 9. They all exist in one line.
// Given a string of 10 digits illustrating how the keys are positioned. To type a digit, you start from index zero to the index of the target digit. It
// takes la - b| milliseconds to move from index a to index b
// Write a function to calculate the number of milliseconds needed to type a number with one finger.
//     Example 1:
// Input: digits = "0123456789", num = "210"
// Output:
// Example 2:
// Input: digits =
// "8459761203", num = "5439"'
// Output: 17
// Constraints:
//• digits. length == 10
// digits contains each digit [0-9] exactly once in some order.
// 1 <= num. lenath <= 104
// num[il is digit.

export const numberGenerator = (num : string, digits : string) : number => {
    let keyMap = new Map();
    let time: number = 0;
    let interval: number = 0;

    for (let i = 0; i < digits.length; i++) {
        keyMap.set(Number(digits[i]), i);
    }

    for (let i = 0; i < num.length; i++) {
        let prev : number = Number(num[i - 1]);
        let curr : number = Number(num[i]);

        if (i === 0) {
           interval = Math.abs(Number(keyMap.get(curr)));
           time += interval;
           continue;
        }
        time += Math.abs(Number(keyMap.get(prev) - Number(keyMap.get(curr))));
    }
    console.log({time});
    return time;
}

// Suppose you're given a set which originally contains numbers from 1 to n. Unfortunately, due to a data error, one of the numbers in the set got
// duplicated to another number in the set, which results in a repetition of one number and a loss of another number.
//     Given an array nums representing the data status of this set after the error, find and return the number that occurs twice and the number that is
// missing in the form of an array.
//     Example 1:
// Input: nums = [1,2,3,4,31
//     Output: [3,5]
// Explanation:
//     3 is repeated twice and 5 is missing.
//     Example 2:
// Input: nums = [1,2,2]
// Output: [2,3]
// Explanation:
//     2 is repeated twice and 3 is missing.

export const duplicatedNumber = (num : number[]) : number[] => {

    return [1];
}
