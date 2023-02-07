const sayHello = () => {
    alert("Hello 1");
}

const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const sayHello2 = () => {
    // debugger
    alert("Hello 2");
}
btn2.onclick = sayHello2;
// btn2.onclick = () => {
//     alert("Hello 2");
// }

btn3.addEventListener("click", () => {
    alert("Hello 3");
})

// Mouse Event
// document.addEventListener('click', function (event) {
//     console.log(event);
// })

// document.addEventListener('mousedown', function () {
//     console.log('mousedown');
// })

// document.addEventListener('mousemove', function () {
//     console.log('mousemove');
// })

// document.addEventListener('mouseup', function () {
//     console.log('mouseup');
// })

// THUC HANH
// Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột
// Mỗi lần nhấn chuột chỉ có 1 hình tròn được xuất hiện
// document.addEventListener('click', function (event) {
//     // Xóa hình tròn trước đó (nếu có)
//     const cycleEl = document.querySelector(".cycle");
//     console.log(cycleEl);
//     if(cycleEl) {
//         cycleEl.parentElement.removeChild(cycleEl);
//     }

//     // B1 : Tạo ra hình tròn
//     const box = document.createElement("div");
//     box.classList.add("cycle")

//     // B2 : Set vị trí
//     console.log(event);
//     box.style.left = `${event.offsetX - 50}px`;
//     box.style.top = `${event.offsetY - 50}px`;

//     // B3 : Thêm vào DOM
//     document.body.prepend(box);
// })

// Keyboard
// Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });

const inputEl = document.querySelector("input");
const resultEl = document.querySelector("span");

inputEl.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        let term = inputEl.value;
        if(term.trim() == "") {
            alert("Nội dung không được để trống");
            return;
        }
        resultEl.innerText = term;
        inputEl.value = "";
    }
})