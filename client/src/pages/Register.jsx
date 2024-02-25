import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
  


export const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [userType, setUserType] = React.useState("student");
  const [username, setUserName] = React.useState("");
  const navigate = useNavigate();


  const submithandler = (e) => {
    e.preventDefault();

    // console.log(password, confirmPassword, email);

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    axios
      .post("http://localhost:5000/registers", {
        email: email,
        password: password,
        username:username,
        userType: userType,
      })
      .then((res) => {
        if(res.data.ans){
          navigate('/Login');
          console.log("User Register In Successfully!");
        }
        else{
          alert("User already exists");
        } 
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col px-6 py-4 ">
      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="flex items-center justify-center text-xl font-bold font-sans">
         <div>Sign Up</div>
      </div>

        <form
          className="mt-2 space-y-6 border p-8 rounded shadow-xl w-96"
          action="registers"
          method="POST"
          onSubmit={submithandler}
        >
          <div>
            <div className="relative mt-2">
              <i className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <i className="fa-solid fa-envelope"></i>
              
              </i>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="pl-10 h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="relative mt-2">
              <i className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <i className="fa-solid fa-user"></i>
              </i>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="username"
                required
                onChange={(e) => setUserName(e.target.value)}
                className="pl-10 h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                required
                autoComplete="new-password"
                className="pl-10 h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mt-2 relative">
              <i className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                {" "}
                <i className="fa-solid fa-eye"></i>
              </i>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                required
                className="pl-10 h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="registerAs" className="block text-sm font-medium text-gray-700">
              Register as
            </label>
            <select
              id="registerAs"
              name="registerAs"
              className="mt-1 h-10 block w-full pl-3 pr-10 py-2 text-base ring-1 ring-inset ring-gray-300 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="Student" >Student</option>
              <option value="club">Club</option>
            </select>
          </div>

          
          <div>
            <button
              type="submit"
              className="flex w-full h-12 justify-center rounded-full bg-gray-800 px-3 py-2.5 text-sm leading-6 text-white shadow-sm hover:bg-gray-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
          <div className='flex items-center justify-center text-sm'>
              <p>Already have an account?<Link to="/Login" className="text-blue-500 hover:underline"> Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};
