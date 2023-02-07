let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

let currentColors = [...colors];

const boxesEl = document.querySelector(".boxes");
const pointsEl = document.querySelector(".points");
const btn = document.getElementById("btn");

// 1. Hiển thị box
// 2. Cập nhật total box
const renderBox = arr => {
    boxesEl.innerHTML = "";

    let html = "";
    arr.forEach((color, index) => {
        html += `
            <div 
                class="box" 
                style="background-color : ${color}"
                onclick="removeBox(${index})"
            >
            </div>`
    });

    boxesEl.innerHTML = html;

    // Cập nhật total box
    pointsEl.innerHTML = arr.length;
}

btn.addEventListener("click", () => {
    currentColors = [...currentColors, ...colors];
    renderBox(currentColors);
})

const removeBox = index => {
    currentColors.splice(index, 1);
    renderBox(currentColors);
}

renderBox(currentColors);