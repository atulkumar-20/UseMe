import "./SignIn.css";
import { SignIn } from "@clerk/clerk-react";
const SignIn = () => {
  return (
    <>
      <div className="signIn">
        <SignIn path="/sign-in" />
      </div>
    </>
  );
};

export default SignIn;
