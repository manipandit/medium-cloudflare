import Quote from "../components/Quote";
import Signin from "../components/Signin";

export function SigninPage() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Signin />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
}
