import { useEffect, useState, createContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import { RouterOutlet } from "./RouterOutlet"
import { HomePage } from "./pages/HomePage/HomePage"
import { NotFound } from "./pages/NotFound"
import { TestPage } from "./pages/TestPage/TestPage"
import { LoginPage } from "./pages/Account/login/LoginPage"
import { RegisterPage } from "./pages/Account/register/RegisterPage"
import { ChatPage } from "./pages/Chat/ChatPage"
import { CardProyect } from "./Components/CardProyect/CardProyect"
import { CardsList } from "./Components/CardProyect/CardsList"

export const AuthContext = createContext();

export const Index = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [dataUser, setDataUser] = useState({})

  const routes = createBrowserRouter([
    {
      errorElement: <NotFound />,
      path: "/",
      element: <RouterOutlet />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: '/test-page',
          element: <TestPage />
        },
        {
          path: '/chat',
          element: <ChatPage />
        },
        {
          path: '/cards',
          element: <CardsList />
        }

      ]
    },
    {
      path: '/login',
      element: loggedIn ? <Navigate to={'/'} /> : <LoginPage />
    },
    {
      path: '/register',
      element: loggedIn ? <Navigate to={'/'} /> : <RegisterPage />
    },
  ])

  useEffect(() => {
    const tok = localStorage.getItem('token')
    if (tok) {
      setLoggedIn(true)
      setDataUser(JSON.parse(localStorage.getItem('3Tr13c')))
    }
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ loggedIn, dataUser, setDataUser, setLoggedIn }}>
        <RouterProvider router={routes} />
      </AuthContext.Provider>
    </>
  )
}
