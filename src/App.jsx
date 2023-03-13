import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthLayout from './components/authentication/authLayout/authLayout.component'
import AuthForm from './components/authentication/authForm.component'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            // index: true,
            path: ':authType',
            element: <AuthForm />,
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
