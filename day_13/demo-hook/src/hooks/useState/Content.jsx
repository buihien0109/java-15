import React, { useState } from "react";

const orders = [10000, 20000, 30000];

function Content() {
    // Xử lý phức tạp + cần nhiều thời gian để thực hiện
    // const rs = orders.reduce((a, b) => a + b, 0);
    // console.log(rs);

    const [total, setTotal] = useState(() => {
        const rs = orders.reduce((a, b) => a + b, 0);
        console.log(rs);
        return rs;
    });
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        id: 1,
        name: "Nguyễn Văn A",
        email: "a@gmail.com",
    });

    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 10000 },
        { id: 2, name: "Product 2", price: 20000 },
        { id: 3, name: "Product 3", price: 30000 },
    ]);

    // {
    //     id: 1,
    //     name: "Nguyễn Văn A",
    //     email: "a@gmail.com",
    //     name: "abc"
    // }
    const randomName = () => {
        const rdName = `New name ${Math.floor(Math.random() * 1000)}`;
        setUser({ ...user, name: rdName });
        console.log(user);
    };

    const randomPrice = () => {
        const productId = 1;
        const rdPrice = Math.floor(Math.random() * 100000);

        const newProducts = products.map((p) => {
            if (p.id === productId) {
                return { ...p, price: rdPrice };
            }
            return p;
        });
        setProducts(newProducts);
    };

    const deleteProduct = (id) => {
        const newProducts = products.filter((p) => p.id !== id);
        setProducts(newProducts);
    };

    const addCount = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    };

    return (
        <>
            {console.log("render")}

            <h2>Count : {count}</h2>
            <button onClick={addCount}>Add</button>

            <hr />

            <h2>User</h2>
            <p>
                {user.id} - {user.name} - {user.email}
            </p>

            <button onClick={randomName}>Random name</button>

            <hr />

            <h2>Products</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.id} - {p.name} - {p.price}
                        <button onClick={() => deleteProduct(p.id)}>Xóa</button>
                    </li>
                ))}
            </ul>

            <button onClick={randomPrice}>Random price</button>
        </>
    );
}

export default Content;
