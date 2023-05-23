import { useQuery } from '@tanstack/react-query'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { Outlet, Navigate, useLoaderData } from 'react-router-dom'
// import { setUser } from '../../store/user/user.reducer'

export default function Protect() {
  // const dispatch = useDispatch()
  const { data: { document = null } = {} } = useLoaderData() || {}

  // useEffect(() => {
  //   console.log('set current user')
  //   dispatch(setUser(document))
  // }, [])
  // const document = true;
  console.log('verify:', document, useLoaderData())
  return !document ? (
    <Navigate to="/auth/login" />
  ) : (
    <div className="w-full h-full flex">
      <Outlet />
    </div>
  )
}
