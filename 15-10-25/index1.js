// 1. Sum of Even Numbers Using a for Loop 
// Task: Write a function that takes an array of numbers and returns the sum of only the even 
// numbers. 
// Examples: 
// ● evenSum([1, 2, 3, 4, 5]) ➞ 6 
// ● evenSum([7, 9, 12, 14]) ➞ 26 

function sumofeven(num){
    let sum=0
    for(let i=0;i<num.length; i++){
        if(num[i]%2==0)
            sum+=num[i]
    }
    return sum
}
console.log(sumofeven([2,4,6,8,10]));