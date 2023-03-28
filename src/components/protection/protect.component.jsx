import { Outlet, Navigate, useLoaderData } from 'react-router-dom'

export default function Protect() {
  // const { data: { document = null } = {} } = useLoaderData() || {}
  const document = true;
  console.log(document)
  return !document ? (
    <Navigate to="/auth/login" />
  ) : (
    <div className="w-full h-full flex">
      <Outlet />
    </div>
  )
}
