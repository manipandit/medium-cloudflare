import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../utils/util";

export default function Appbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState("Anonymous");
  const getUserDetails = async () => {
    const { data } = await axios.get(`${backendUrl}/blog/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    setUser(data.user.name);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="sticky top-0 z-20 flex justify-between p-4 px-10 bg-white border-b md:px-20 border-slate-300">
      <Link to={"/blogs"}>
        <div className="text-2xl font-bold">Medium</div>
      </Link>
      <div className="flex items-center gap-x-2">
        <div className="mr-6">
          <Link to={"/publish"}>
            <button className="px-3 py-1 text-sm text-white bg-green-600 rounded-2xl hover:bg-green-700">
              Add blog
            </button>
          </Link>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("jwt");
            navigate("/signin");
          }}
          className="px-3 py-1 text-sm text-white bg-green-600 rounded-2xl hover:bg-green-700"
        >
          Logout
        </button>
        <div>
          <Avatar name={user} />
        </div>
      </div>
    </div>
  );
}
