// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const listEl = document.getElementById("list");

// Tạo thẻ input
const inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.placeholder = "Enter text ...";
listEl.insertAdjacentElement("beforebegin", inputEl);

// Tạo button
const btnAdd = document.createElement("button");
btnAdd.innerText = "Add";
inputEl.insertAdjacentElement("afterend", btnAdd);

const addElement = () => {
    const value = inputEl.value;
    if(value.trim() === "") {
        alert("Nội dung không được để trống");
        return;
    }

    listEl.insertAdjacentHTML("beforeend", `<li>${value}</li>`);
    inputEl.value = "";
}

// Add bằng cách bấm nút
// btnAdd.addEventListener("click", addElement)
btnAdd.onclick = addElement

// Add bằng phím Enter
inputEl.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addElement();
    }
})



// 7. Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
const btnRemove = document.createElement("button");
btnRemove.innerText = "Remove";
btnAdd.insertAdjacentElement("afterend", btnRemove);