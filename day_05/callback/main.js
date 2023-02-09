function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 4000);
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 5000);
}

function finish() {
    console.log("Kết thúc công việc");
}

// Thực hiện đồng thời
// Các công việc k liên quan gì đến nhau
// doTask3("Nấu cơm", () => {
//     console.log("Kết thúc Nấu cơm");
// })
// doTask1("Làm bài tập", () => {
//     console.log("Kết thúc Làm bài tập");
// })
// doTask2("Đá bóng", () => {
//     console.log("Kết thúc Đá bóng");
// })

// Thực hiện nối tiếp
// Cv sau cần kết quả của cv trước để có thể thực hiện
doTask1("Nhặt rau", () => {
    doTask2("Rửa rau", () => {
        doTask3("Luộc rau", finish)
    })
})

// Nếu có quá nhiều callback => callback hell

