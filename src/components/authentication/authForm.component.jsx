import { useParams } from 'react-router-dom'
import LoginForm from './login/loginForm.component'
import RegisterForm from './register/registerForm.component'

export default function AuthForm() {
  const { authType } = useParams()

  return (
    <div className="bg-white h-full flex flex-col justify-center items-center p-8">
      <div className="w-auto">
        {authType === 'login' && <LoginForm />}
        {authType === 'register' && <RegisterForm />}
      </div>
    </div>
  )
}
