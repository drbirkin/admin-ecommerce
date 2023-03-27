import { Outlet, Navigate, useLoaderData } from 'react-router-dom'

export default function Protect() {
  // const { data: { document = null } = {} } = useLoaderData() || {}
  const document = true;
  console.log(document)
  return !document ? (
    <Navigate to="/auth/login" />
  ) : (
    <div className="w-full h-full grid grid-cols-3 gap-0">
      <Outlet />
      <div className="col-span-2 h-full bg-black-200"></div>
    </div>
  )
}
