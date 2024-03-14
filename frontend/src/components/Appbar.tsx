import Avatar from "./Avatar";

export default function Appbar() {
  return (
    <div className="sticky top-0 z-20 flex justify-between p-4 px-20 bg-white border-b border-slate-300">
      <div className="text-2xl font-bold">Medium</div>
      <div>
        {/* <div>
            <button>Sign up</button>
        </div>
        <div>
            <button>Login</button>
        </div> */}
        <div>
          <Avatar name="mani" />
        </div>
      </div>
    </div>
  );
}
