import React, { useEffect, useState } from "react";

/*
useEffect(cb, [deps])

TH1 : useEffect(cb)
- Được chạy lại mỗi lần re-render

TH2 : useEffect(cb, [])
- Chỉ chạy 1 lần duy nhất, sau lần render đầu tiên

TH3 : useEffect(cb, [deps])
- Được chạy lại nếu có sự thay đổi về giá trị của deps

Chung : Đều chạy sau lần render đầu tiên
*/
function Post() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    // TH1 : useEffect(cb)
    // useEffect(() => {
    //     console.log("TH1 : useEffect(cb)");
    // });

    // TH2 : useEffect(cb, [])
    // useEffect(() => {
    //     console.log("TH2 : useEffect(cb, [])");
    // }, []);

    // TH3 : useEffect(cb, [deps])
    useEffect(() => {
        console.log("TH3 : useEffect(cb, [deps])");
    }, [count, count1]);

    const addCount = () => {
        setCount(count + 1);
    };

    const addCount1 = () => {
        setCount1(count1 + 1);
    };

    return (
        <div>
            {console.log("render")}
            <h2>Count : {count}</h2>
            <button onClick={addCount}>Add</button>

            <h2>Count1 : {count1}</h2>
            <button onClick={addCount1}>Add</button>
        </div>
    );
}

export default Post;
