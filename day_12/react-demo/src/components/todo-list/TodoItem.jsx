import React from "react";

// props : Là object, chứa các giá trị mà component nhận được
function TodoItem({ title, index, onDelete }) {
    const handleDelete = () => {
        onDelete(index);
    };

    return (
        <div>
            {title}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TodoItem;
