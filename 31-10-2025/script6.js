let product = [
    {name: "Pen", stock: 10},
    {name: "Pencil", stock: 0},
    {name: "Notebook", stock: 5},
]

let product2 = [
    {name: "Laptop", stock:5},
    {name: "Mouse", stock:2},
    {name: "Keyboard", stock:0},
]

let product3 = [
    { name: "Book", stock: 3 },
    { name: "Eraser", stock: 0 },
    { name: "Marker", stock: 7 },
    { name: "Ruler", stock: 0 },
]

let stock = product.filter(num => num.stock > 0);
let stock2 = product2.filter(num => num.stock >0);
let stock3 = product3.filter(num => num.stock > 0);

console.log(stock3);
console.log(stock2);
console.log(stock);