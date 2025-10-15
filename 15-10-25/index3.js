// 3. Total Number of Characters Using a for...of Style 
// Task: Write a function that takes an array of strings and returns the total number of characters 
// from all strings combined. 
// Examples: 
// ● totalChars(["Hi", "Bridgeon", "JS"]) ➞ 11 
// ● totalChars(["Code", "Your", "Future"]) ➞ 14 

function totalletter(str){
    let result=0
    for(let key of str){
        result+=key.length;
    }
    return result
}
console.log(totalletter(["Hi","Bridgeon","js"]));