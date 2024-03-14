import { Link } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { SignupInputs } from "@manipandit/medium-common";
import axios from "axios";
import { backendUrl } from "../utils/util";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState<SignupInputs>({
    name: "",
    email: "",
    password: "",
  });
  // console.log(signupInputs);

  const signup = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/user/signup`,
        signupInputs
      );

      const jwt = response.data;
      localStorage.setItem("jwt", jwt);
      navigate("/blogs");
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center ">
          <div className="text-3xl font-bold"> Create an account</div>
          <div className="text-slate-400">
            Already have an account?
            <Link to={"/signin"} className="pl-2 font-semibold underline">
              Login
            </Link>
          </div>
        </div>

        <div className="flex flex-col px-10 mt-10 lg:px-40 gap-y-4">
          <div className="w-full">
            <Input
              label="Name"
              placeholder="Enter your name"
              type="text"
              onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Input
              label="Email"
              placeholder="johndoe@gmail.com"
              type="text"
              onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Input
              label="Password"
              placeholder=""
              type="password"
              onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <button
              className="w-full p-2 text-white bg-[#121212] rounded-md"
              onClick={signup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
