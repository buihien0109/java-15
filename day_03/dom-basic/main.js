const heading = document.getElementById("heading");
console.log(heading);

const headingSelector = document.querySelector("#heading");
const para2 = document.querySelector(".para-2");
console.log(para2);

const paras = document.querySelectorAll("p");
console.log(paras);

const item3 = document.querySelector("ul li:nth-child(3)");
console.log(item3);

heading.style.color = "red";
heading.style.backgroundColor = "black";

paras.forEach(ele => {
    ele.style.color = "blue";
})

Array.from(paras).map(ele => {
    ele.style.fontSize = "20px";
})

const ul = document.querySelector("ul");
console.log(ul.innerHTML);
console.log(ul.innerText);
console.log(ul.textContent);

heading.textContent = "<span>Xin chào</span>"

// Thêm phần tử
const btn = document.createElement("button");
btn.innerText = "Click me";
console.log(btn)

// document.body.appendChild(btn);
// document.body.prepend(btn);
// document.body.insertBefore(btn, para2);

// para2.insertAdjacentElement("beforebegin", btn);
para2.insertAdjacentHTML("beforebegin", "<button>Click me</button>")

// Xóa
// document.body.removeChild(heading);
// heading.parentNode.removeChild(heading);

// ClassList
heading.classList.add("text-red", "text-big", "text-center");
heading.classList.remove("text-red", "text-center");
console.log(heading.classList.contains("text-big"));
console.log(heading.classList.contains("abc"));

// setInterval(() => {
//     heading.classList.toggle("text-big");
// }, 1000) // 1000ms = 1s

// setTimeout(() => {

// }, 1000)

// Đếm ngược thời gian
const timeEl = document.getElementById("time");
const spanEl = document.querySelector("#time span");
let time = 10;

const interval = setInterval(() => {
    time--;
    spanEl.innerText = `${time}s`;

    if(time == 0) {
        clearInterval(interval);
        timeEl.innerText = "Kết thúc";
    }
}, 1000) // 1000ms = 1s