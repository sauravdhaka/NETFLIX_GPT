import { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidSignUpData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

function SignUp() {
  const [errorMessage, SetErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // validation the form
    const message = checkValidSignUpData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    //console.log(email.current.value, password.current.value);
    //console.log(message)
    SetErrorMessage(message);

    if (message) {
      return;
    }
    //sign up logic
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetErrorMessage(errorCode+ "- " + errorMessage)
      });
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 ">Sign Up</h1>
        <input
          ref={name}
          type="text"
          placeholder="Enter Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          Sign Up
        </button>
        <Link to={"/"}>
          <p>Aready Have an Account? Sign In Now</p>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
