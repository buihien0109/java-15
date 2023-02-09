// // Promise
// // [[PromiseState]] : "pending"
// // [[PromiseResult]] : undefined
// const promise = new Promise((resolve, reject) => {});
// console.log(promise);

// // [[PromiseState]] : "fulfilled"
// // [[PromiseResult]] : "Thành công"
// const promiseSuccess = new Promise((resolve, reject) => {
//     resolve("Thành công");
// });
// console.log(promiseSuccess);

// // [[PromiseState]] : "rejected"
// // [[PromiseResult]] : "Thất bại"
// const promiseFail = new Promise((resolve, reject) => {
//     reject("Thất bại");
// });
// console.log(promiseFail);

// HỨA : Nếu có trên 30 triệu, sẽ mua iphone 13 pro max
let money = 25

// Hứa
let buyIphone = () => {
    return new Promise(function (resolve, reject) {
        if (money > 30) {
            resolve("Mua iphone thôi") // Lời hứa được thực hiện thành công
        } else {
            reject("Kiếm thêm tiền đi") // Lời hứa được thực hiện thất bại
        }
    })
}

let buyAirpod = () => {
    return new Promise(function (resolve, reject) {
        if (money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
        }
    })
}

buyIphone()
    .then((res) => {
        console.log(res);
        return buyAirpod();
    })
    .then((res) => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("Về nhà thôi");
    })