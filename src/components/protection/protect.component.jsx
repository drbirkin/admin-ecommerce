import { useQuery } from '@tanstack/react-query'
import { Outlet, Navigate, useLoaderData } from 'react-router-dom'

export default function Protect() {
  const { data: { document = null } = {} } = useLoaderData() || {}
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
