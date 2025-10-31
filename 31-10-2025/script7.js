function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + "...";
  } else {
    return str;
  }
}

console.log(truncate("Hello World", 5)); 
console.log(truncate("Hi", 5));      
console.log(truncate("Bridgeon", 4)); 

