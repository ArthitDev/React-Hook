import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ArthitDev");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (count > 0 && count <= 10) {
      fetch(`https://jsonplaceholder.typicode.com/users/${count}`).then((res) =>
        res.json().then((data) => setUser(data))
      );
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button
        type="button"
        onClick={() => setName(user.name || "Missing Name")}
      >
        Update Name
      </button>
      <h3>{user.name || "Unknow"}</h3>
      <div className="card">
        <h2>{count}</h2>
        <button type="button" onClick={() => setCount(count + 1)}>
          เพิ่่ม
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          ลด
        </button>
      </div>
    </div>
  );
};
export default UseEffect;
