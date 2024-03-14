import { Link } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { SigninInputs } from "@manipandit/medium-common";
import { backendUrl } from "../utils/util";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  const navigate = useNavigate();
  const [signinInputs, setSigninInputs] = useState<SigninInputs>({
    email: "",
    password: "",
  });
  //   console.log(signinInputs);

  const signin = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/user/signin`,
        signinInputs
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
          <div className="text-3xl font-bold"> Login to your account</div>
          <div className="text-slate-400">
            Don't have an account?
            <Link to={"/signup"} className="pl-2 font-semibold underline">
              Signup
            </Link>
          </div>
        </div>

        <div className="flex flex-col px-10 mt-10 lg:px-40 gap-y-4">
          <div>
            <Input
              label="Email"
              placeholder="johndoe@gmail.com"
              type="text"
              onChange={(e) => {
                setSigninInputs({
                  ...signinInputs,
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
                setSigninInputs({
                  ...signinInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <button
              className="w-full p-2 text-white bg-[#121212] rounded-md"
              onClick={signin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
