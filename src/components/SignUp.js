import Header from "./Header";
import {Link} from "react-router-dom"
function SignUp() {
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
          <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4 ">Sign Up</h1>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-4 my-4 w-full bg-gray-700"
            />
          
          
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700"
            />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign Up</button>
            <Link to={'/'}>
            <p>Aready Have an Account? Sign In Now</p>
            </Link>
           
          </form>
        </div>
      );
}

export default SignUp