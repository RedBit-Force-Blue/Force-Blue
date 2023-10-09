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
import { LoginChat } from "./pages/Chat/LoginChat"
import { CardsList } from "./Components/CardProyect/CardsList"
import { ProyectData } from "./pages/ProyectData/ProyectData"
import { ChatListPage } from "./pages/Chat/ChatListPage"
import { Profile } from "./pages/Profile/Profile"

function App() {
  try {
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
            path: '/testPage',
            element: <TestPage />
          },
          {
            path: '/Login',
            element: <LoginPage />
          },
          {
            path: '/Register',
            element: <RegisterPage />
          },
          {
            path: '/chat',
            element: <ChatPage />
          },
          {
            path: '/chatlist',
            element: <ChatListPage />
          },
          {
            path: '/cards',
            element: <CardsList />
          },
          {
            path: '/loginchat',
            element: <LoginChat />
          },
          {
            path: '/proyect-data',
            element: <ProyectData />
          },
          {
            path: '/profile',
            element: <Profile />
          }

        ]
      }
    ])
    return (
      <>
        <RouterProvider router={routes} />
      </>
    );
  } catch (error) {
    console.log(error)
  }

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
