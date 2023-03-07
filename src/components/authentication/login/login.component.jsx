import { LoginForm } from './loginForm.component'

export default function Login() {
  return (
    <div className="bg-white h-full flex flex-col justify-center items-center p-8">
      <div className="w-auto">
        <h1 className="text-black font-semibold text-4xl font-open-sans">
          Sign in to your account
        </h1>
        <LoginForm />
      </div>
    </div>
  )
}
