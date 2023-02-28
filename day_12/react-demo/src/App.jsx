import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Register from "./components/register/Register";
import TodoList from "./components/todo-list/TodoList";

function App() {
    const [show, setShow] = useState(true);
    const message = "Xin chào";

    const toggle = () => {
        setShow(!show);
    };

    return (
        <>
            <TodoList appName="Todo App" />
            {show && <Counter />}

            <button onClick={toggle}>Toggle</button>

            <Register />
        </>
    );
}

export default App;
