import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex items-center justify-center w-screen h-screen gap-x-4">
      <Link to={"/signup"}>
        <button className="px-4 py-2 text-base text-white bg-green-700 rounded-lg">
          Signup
        </button>
      </Link>
      <Link to={"/signin"}>
        <button className="px-4 py-2 text-base text-white bg-green-700 rounded-lg">
          Login
        </button>
      </Link>
    </div>
  );
}
