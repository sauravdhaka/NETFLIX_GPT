import Browes from "./Browes"
import Login from "./Login"
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import SignUp from "./SignUp"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useEffect } from "react"

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        {
            path : "/browes",
            element : <Browes/>
        },{
            path : "/signup",
            element : <SignUp/>
        }
    ])



  return (
    <div>
       <RouterProvider router={appRouter}>

       </RouterProvider>
    </div>
  )
}

export default Body