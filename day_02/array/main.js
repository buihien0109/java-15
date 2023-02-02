// // Khai báo array rỗng
// let arr = [];

// // Khai báo array
// let number = [];

// // Gán giá trị cho các phần tử của array thông qua chỉ số
// number[0] = 1;
// number[1] = "Bùi Hiên";
// number[2] = true;

// // Khai báo và khởi tạo giá trị cho array
// let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]) // 1
console.log(numbers[1]) // 2

console.log(numbers[4]) // 5
console.log(numbers[numbers.length - 1]) // 5

numbers[0] = 10;
numbers[1] = 20;

console.log(numbers) // [10, 20, 3, 4, 5]

let arr = [1, 2, 3];
let arr1 = [1, 2, 3];
let arr2 = arr.sort().reverse(); // [3,2,1];
let arr3 = [3, 2, 1];
let text = "1,2,3";
let text1 = "3,2,1";

console.log(arr == arr1); // false
console.log(arr == arr2); // true
console.log(arr == text); // false
console.log(arr2 == arr3); // false
console.log(arr1 === text); // false
console.log(arr1 === text1); // false

const findMax = arr => {
    return Math.max(...arr)
}

console.log(findMax([3, 5, 2, 5, 1, 10]));

let list = ['a', 'b', 'c'];
let list1 = [...list];
let list2 = list.slice();

let message = 'techmaster'
console.log([...message])
console.log(message.split("m"))


// Object

let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com",
    address: {
        city: "Hà Nội",
        district: "Thanh Xuân"
    },
    work() {
        console.log("work")
    }
    // work : function() {

    // }
}

// let name = user.name;
// let age = user.age;
// let email = user.email;

let { name, age, email } = user;

// console.log(user.name);

// user.name = "Trần Văn B";
// user.work();

// delete user.age;

// user.status = true;
// console.log(user);

// console.log(user["name"])

// console.log(user.address.district)

let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const getTotalPrice = arr => {
    return arr.reduce((total, p) => {
        return total + (p.count * p.price)
    }, 0);
}

console.log(getTotalPrice(products))

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const getProductByBrand = (arr, brand) => {
    return arr.filter(p => p.brand === brand);
}
console.log(getProductByBrand(products, "Apple"));