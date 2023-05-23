import { useSelector } from 'react-redux'
// import { selectCurrentUser } from '../../../store/user/user.selector'
import { Outlet, useParams, Navigate, useLoaderData } from 'react-router-dom'

export default function AuthLayout() {
  // const user = useSelector(selectCurrentUser)
  const { authType } = useParams()
  // console.log('check user: ', user)
  // if (user) return <Navigate to="/" />
  return !authType ? (
    <Navigate to="login" />
  ) : (
    <div className="w-full h-full grid grid-cols-3 gap-0">
      <Outlet />
      <div className="col-span-2 h-full bg-black-200"></div>
    </div>
  )
}
