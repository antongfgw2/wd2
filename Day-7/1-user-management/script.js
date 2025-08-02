const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const contactInput = document.querySelector("#contact");

const addBtn = document.querySelector("#add");
const tbody = document.querySelector("tbody");

let users = [];

let updateIndex = "";

function init() {
  let lUsers = localStorage.getItem("users");

  if (lUsers != null) {
    users = JSON.parse(lUsers);
  }

  displayData();
}

init();

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    !nameInput.value ||
    !emailInput.value ||
    !ageInput.value ||
    !contactInput.value
  ) {
    alert("Please enter all values");
    return;
  }
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    contact: contactInput.value,
  };
  if (this.innerHTML === "Add Info") {
    users.push(user);
  } else {
    users = users.map((info, index) => {
      if (index === updateIndex) {
        return user;
      }
      return info;
    });
  }
  reset();

  update();
});

function displayData() {
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const email = document.createElement("td");
    const age = document.createElement("td");
    const contact = document.createElement("td");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");
    const div = document.createElement("div");

    div.append(updateBtn);
    div.append(deleteBtn);

    deleteBtn.innerText = "Delete";
    updateBtn.innerText = "Update";

    updateBtn.addEventListener("click", () => {
      nameInput.value = user.name;
      emailInput.value = user.email;
      ageInput.value = user.age;
      contactInput.value = user.contact;
      addBtn.innerText = "Update Info";
      updateIndex = index;
    });

    deleteBtn.addEventListener("click", () => {
      removeUser(index);
    });

    name.innerText = user.name;
    email.innerText = user.email;
    age.innerText = user.age;
    contact.innerText = user.contact;

    row.append(name);
    row.append(email);
    row.append(age);
    row.append(contact);
    row.append(div);

    tbody.append(row);
  });
}

function removeUser(id) {
  const newUsers = users.filter((user, index) => {
    return index !== id;
  });

  users = [...newUsers];
  update();
}

function update() {
  localStorage.setItem("users", JSON.stringify(users));
  tbody.innerHTML = "";
  displayData();
}

function reset() {
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  contactInput.value = "";
}
