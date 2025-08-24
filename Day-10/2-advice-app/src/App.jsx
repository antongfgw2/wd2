import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(data.slip.advice);
      setLoading(false);
    } catch (error) {
      alert("Something bad occured. Please try again.");
      setAdvice("Try after sometime");
      setLoading(false);
    }
    // fetch("https://api.adviceslip.com/advice")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  if (loading) {
    return (
      <img
        src="https://static.wixstatic.com/media/68315b_30dbad1140034a3da3c59278654e1655~mv2.gif"
        alt=""
      />
    );
  }

  return (
    <div>
      <h1>{advice}</h1>
    </div>
  );
};

export default App;
