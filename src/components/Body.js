import Browes from "./Browes"
import Login from "./Login"
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import SignUp from "./SignUp"

const Body = () => {

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