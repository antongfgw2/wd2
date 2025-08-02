import React from "react";
import { useState } from "react";

const App = () => {
  let name = "Kevin";

  const [num, setNum] = useState(1);
  const handleClick = () => {
    name = "Jake";
    setNum((currNum) => currNum + 1);
    setNum((currNum) => currNum + 1);

    // setNum(()=>{
    //   return 200
    // })

    // setNum(200)

    // setNum(num + 1); //2
    // setNum(num + 1); //2
    console.log("Clicked", num);
  };

  console.log("Rendered");

  return (
    <div>
      <h1>App - {num}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
