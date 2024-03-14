import Quote from "../components/Quote";
import Signup from "../components/Signup";

export function SignupPage() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Signup />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
}
