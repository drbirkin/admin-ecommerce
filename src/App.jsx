import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import AuthLayout from './components/authentication/authLayout/authLayout.component'
import AuthForm from './components/authentication/authForm.component'
import Protect from './components/protection/protect.component'
import Home from './components/userpanel/home.component'
import PageLayout from './components/pages/pageLayout.component'
import { useQuery } from '@tanstack/react-query'
import { verifyUser } from './api/authentication/authentication'
import Navigations from './components/navigations/navigations.component'
import LandingPage from './components/subpages/landingpage/landingpage.component'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '',
          element: <Protect />,
          errorElement: <Navigate to="/auth/login" />,
          // loader: () => {
          //   const { data, isError, isLoading, error } = useQuery({
          //     queryKey: ['auth'],
          //     queryFn: verifyUser,
          //     // enabled: false,
          //   })
          //   if (isLoading) console.log('Verify user credentials')
          //   if (isError || error) console.error('error', error)
          //   return data
          // },
          // loader: verifyUser,
          children: [
            {
              path: '',
              element: <Navigations />,
              children: [
                {
                  path: '',
                  element: <PageLayout/>,
                  children: [
                    {
                      index: true,
                      element: <LandingPage/>
                    }
                  ]
                }
              ]
            },
          ],
        },
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

  return <RouterProvider router={router} />
}

export default App
