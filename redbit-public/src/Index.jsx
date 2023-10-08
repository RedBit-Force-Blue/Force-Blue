import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RouterOutlet } from "./RouterOutlet"
import { HomePage } from "./pages/HomePage/HomePage"
import { NotFound } from "./pages/NotFound"
import { TestPage } from "./pages/TestPage/TestPage"
import {LoginPage} from "./pages/Account/login/LoginPage"
import { RegisterPage } from "./pages/Account/register/RegisterPage"
import { ChatPage } from "./pages/Chat/ChatPage"
import { ProyectData } from "./pages/ProyectData/ProyectData"

function App() {
  try {
    const routes = createBrowserRouter([
      {
        errorElement: <NotFound />,
        path: "/",
        element: <RouterOutlet/>,
        children: [
          {
            path: "/",
            element: <HomePage />,
          }, 
          {
            path: '/testPage', 
            element:<TestPage/>
          }, 
          {
            path :'/Login',
            element:<LoginPage/>
          },
          {
            path:'/Register', 
            element: <RegisterPage/>
          },
          {
            path: '/chat',
            element: <ChatPage/>
          },
          {
            path: '/proyect-data',
            element:<ProyectData/>
          }

        ]
        }
      ])
    return (
     <>
     <RouterProvider router={routes}/>
     </>
    );
} catch (error) {
    console.log(error)
}

}
export default App
