// promise

// 1. waiting
// 2. resolved
// 3. rejected

const data = [
  {
    name: "Kevin",
    age: 24,
  },
  {
    name: "Arul",
    age: 25,
  },
  {
    name: "Sanjana",
    age: 26,
  },
];

const response = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(data);
    reject({ msg: "Sorry no data found" });
  }, 2000);
});

// response
//   .then((users) => {
//     console.log("resolved", users);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

const getResponse = async () => {
  try {
    const users = await response;
    console.log(users);
  } catch (error) {
    console.log("rejected", error);
  }
};

getResponse();
