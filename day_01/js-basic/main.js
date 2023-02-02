console.log("Hello world");

// alert("Xin chào");
// document.write("Hello");

// Khai báo biến và không gán giá trị cho biến
let age;
age = 35;

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn"

console.log("age : ", age)
console.log("email : ", email);

const PI = 3.14;

let binhPhuong; // camelCase
let binh_phuong; // snake_case

// Template string
let name = "Bùi Hiên"
let year = 1997

console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2023 - year} tuổi`);
// console.log("Xin chào các bạn, mình tên là " + name + ". Năm nay " + (2023 - year) + " tuổi");

let status = !true;
let quit = false;

// Function
// c1 : regular function
function sum(a, b) {
    number = 10;
    console.log(number)
    return a + b;
}

// c2 : function expression
let sum1 = function(a = 10, b = 20) { // anonymous function
    return a + b; // 10 + un
}

// c3 : Arrow function - ES6
let sum2 = (a, b) => {
    return a + b;
}

let sayHello = () => {
    console.log("Xin chào các bạn");
}

// let data = sum(2, 3);
// console.log(data);
// console.log(sum(5,6));
// console.log(sum1(10, 20));

// Default Parameter - ES6

console.log(sum1());
console.log(sum(2,4));
console.log(number);

{
    let firstName = "Nguyễn";
    console.log(firstName)
}

// console.log(firstName);
