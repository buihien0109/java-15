const generateId = arr => {
    if (arr.length === 0) return 1;
    return arr[arr.length - 1].id + 1;
}

const todos = [
    { id: 1, title: "Đi chơi", status: true },
    { id: 2, title: "Làm bài tập", status: false },
    { id: 3, title: "Học bài", status: true },
];

const listEl = document.querySelector("ul");
const inputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", () => {
    const title = inputEl.value;
    if (title.trim() === "") {
        alert("Tiêu đề không được để trống");
        return
    }

    const newTodo = {
        id: generateId(todos),
        title: title,
        status: false
    }

    todos.push(newTodo);
    renderTodos(todos);
    inputEl.value = "";
})

const deleteTodo = id => { };

const toggleStatus = id => { };

const editTodo = id => { };

const renderTodos = arr => {
    listEl.innerHTML = "";

    if (arr.length === 0) {
        listEl.insertAdjacentHTML("afterbegin", "<li>Không có công việc nào trong danh sách</li>");
        return;
    }

    let html = "";
    arr.forEach(todo => {
        html += `
            <li>
                <input 
                    type="checkbox" 
                    ${todo.status ? "checked" : ""} 
                    onclick="toggleStatus(${todo.id})"
                />
                <span class=${todo.status ? "active" : ""}>${todo.title}</span>
                <button onclick="editTodo(${todo.id})">Edit</button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </li>
        `
    });

    listEl.innerHTML = html;
}

renderTodos(todos);

