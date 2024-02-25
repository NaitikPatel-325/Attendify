import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/create";

export const Login = () => {
  const {
    username,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
  } = useContext(UserContext);
  const [localUsername, setLocalUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(password);
    setUser(localUsername)
  

    axios
      .post("http://localhost:5000/login", {
        password: password,
        username: username,
      })
      .then((res) => {
        console.log(res);
        if (res.data.ans === "false") {
          setIsLoggedIn(true);
          console.log("User not found");
          navigate("/login");
        } else {
          navigate("/");
          console.log("User Logged In Successfully!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col px-6 py-12 ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-center mb-4">
          <i className="fa-solid fa-users text-6xl text-indigo"></i>
        </div>

        <form
          className="space-y-6 border p-8 rounded shadow-xl w-96"
          action="loggedin"
          method="POST"
        >
          <div>
            <div className="relative mt-2">
              <i className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i className="fa-solid fa-user"></i>
              </i>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                placeholder="Enter Your Username"
                onChange={(e) => {
                  setLocalUsername(e.target.value);
                }}
                required
                className="pl-10 h-12 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 relative">
              <i className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i className="fa-solid fa-lock"></i>
              </i>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="pl-10 h-12 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-black text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  className="ml-4 pl-16 text-black hover:text-black text-sm hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={submithandler}
              className="h-12 flex w-full justify-center rounded-full bg-gray-800 px-3 py-2.5 text-sm leading-6 text-white shadow-sm hover:bg-gray-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center text-sm">
            <p>
              Don't have an account?
              <Link to="/register" className="text-blue-500 hover:underline">
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
