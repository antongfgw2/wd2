import React, { useState } from "react";
import { useEffect } from "react";
import Table from "./components/Table/Table";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [users, setUsers] = useState([]);

  const [userId, setUserId] = useState("");

  const [buttonSt, setButtonSt] = useState("add");

  const handleSubmit = () => {
    if (!name || !email || !age || !contact) {
      alert("Please enter all values");
      return;
    }
    // const user = {
    //   name: name,
    //   email: email,
    //   age: age,
    //   contact: contact,
    // };
    const user = {
      name,
      email,
      age,
      contact,
    };
    setUsers((currUsers) => {
      let newUsers = [...currUsers, user];
      store(newUsers);
      return newUsers;
    });
    setName("");
    setEmail("");
    setAge("");
    setContact("");
  };

  const loadData = (user, id) => {
    setUserId(id);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
    setContact(user.contact);
    setButtonSt("update");
  };

  function updateUser() {
    setUsers((currUsers) => {
      let newUsers = currUsers.map((user, index) => {
        if (index === userId) {
          const userInfo = {
            name,
            email,
            age,
            contact,
          };
          return userInfo;
        }
        return user;
      });
      store(newUsers);
      return newUsers;
    });
    setName("");
    setEmail("");
    setAge("");
    setContact("");
    setButtonSt("add");
  }

  function deleteUser(id) {
    setUsers((currUsers) => {
      let newUsers = currUsers.filter((user, index) => {
        return index !== id;
      });
      store(newUsers);
      return newUsers;
    });
  }

  function store(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  const getInitialData = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    setUsers(users);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="app">
      <h1>User Form</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <div className="form">
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />
        <br />
        <label>Contact No</label>
        <br />
        <input
          type="number"
          name="contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={contact}
        />
        <br />
        {buttonSt === "add" ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={updateUser}>Update</button>
        )}
      </div>

      <Table users={users} loadData={loadData} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
