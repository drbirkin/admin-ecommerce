import { Route, Routes } from 'react-router-dom'
import Login from '../../components/authentication/login/login.component'
import Cover from '../../components/authentication/cover/cover.component'
export default function AuthenticationRoute() {
  return (
    <Routes>
      <Route path="/" element={<Cover />}>
        <Route index element={<Login />}></Route>
        {/* <Route></Route> */}
        {/* <Route></Route> */}
      </Route>
    </Routes>
  )
}
