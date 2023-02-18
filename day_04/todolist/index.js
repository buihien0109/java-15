let todos = [];

const listEl = document.querySelector("ul");
const inputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

const API_URL = "http://localhost:8080/api/todos"

const getTodos = async () => {
    try {
        // 1. Gọi API
        let rs = await axios.get(API_URL);
        todos = rs.data;
        
        // 2. Hiển thị kết quả
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
}

btnAdd.addEventListener("click", async () => {
    const title = inputEl.value;
    if (title.trim() === "") {
        alert("Tiêu đề không được để trống");
        return
    }

    const newTodo = {
        title: title
    }

    try {
        let rs = await axios.post(API_URL, newTodo);
        
        todos.push(rs.data);
        renderTodos(todos);
        inputEl.value = "";
    } catch (error) {
        console.log(error);
    }
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

getTodos();

