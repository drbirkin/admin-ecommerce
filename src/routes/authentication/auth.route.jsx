import { Route, Routes } from 'react-router-dom'
import Login from '../../components/authentication/login/login.component'
export default function AuthenticationRoute() {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      {/* <Route></Route> */}
      {/* <Route></Route> */}
    </Routes>
  )
}
