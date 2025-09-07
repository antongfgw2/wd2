import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Home.css";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../slices/user";
import { useNavigate } from "react-router";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeState, setActiveState] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/signup", {
        name,
        email,
        password,
      });
      toast.success(response.data.msg, {
        position: "top-center",
      });
      clearInputs();
    } catch (error) {
      toast.error(error.msg, {
        position: "top-center",
      });
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        dispatch(handleLogin(response.data.token));
        clearInputs();
        navigate("/dashboard");
        return;
      }
      toast.error(response.data.msg, {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.msg, {
        position: "top-center",
      });
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="home">
      <div className={`container ${activeState ? "right-panel-active" : ""}`}>
        <ToastContainer />
        <div className="form-container sign-up-container">
          <form>
            <h1 className="form__title">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="home__btn" onClick={signup}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1 className="home__title">Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="home__btn" onClick={signin}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left overlay-panel">
              <h1 className="home__title">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost home__btn"
                onClick={() => {
                  setActiveState(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="home__title">Hello, Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost home__btn"
                onClick={() => {
                  setActiveState(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
