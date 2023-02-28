import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const [todos, setTodos] = useState(["Đá bóng", "Làm bài tập", "Đi chơi"]);
    const { appName } = props;

    const handleDelete = (index) => {
        console.log(index);
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <>
            <h1>{appName}</h1>
            {/* <TodoItem title="Đá bóng" />
            <TodoItem title="Làm bài tập" />
            <TodoItem title="Đi chơi" /> */}

            {todos.length > 0 && todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    title={todo}
                    index={index}
                    onDelete={handleDelete}
                />
            ))}

            {todos.length === 0 && <p>Không có công việc nào trong danh sách</p>}
        </>
    );
}

export default TodoList;
