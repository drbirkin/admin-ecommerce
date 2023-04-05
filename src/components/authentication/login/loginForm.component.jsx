import { useState } from 'react'
import { AiOutlineUser, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiLockOpenAlt } from 'react-icons/bi'
import { useMutation } from '@tanstack/react-query'
import { Link, redirect } from 'react-router-dom'

// axios
import { loginUser } from '../../../api/authentication/authentication'

// buttons
import { SubmitButton } from '../../buttons/buttons.component'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState('')
  // https://codesandbox.io/s/test-react-query-react-form-i2fk2?file=/src/App.js
  // https://medium.com/analytics-vidhya/how-to-post-and-fetch-data-using-react-query-4c3280c0ef96
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: loginUser.bind(this, username, password, remember),
    onSuccess: (data) => {
      console.log(data)
    },
  })
  const loginHandler = (event) => {
    event.preventDefault()
    console.log('loading')
    mutate()
    isSuccess && redirect('/')
  }

  return (
    <>
      <h1 className="text-black font-semibold text-4xl font-open-sans">
        Sign in to your account
      </h1>
      <form className="w-full flex flex-col" onSubmit={loginHandler}>
        {/* username or email */}
        <label htmlFor="username" className="text-black text-left mt-5">
          Email or username
        </label>
        <div className="group relative mt-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            <AiOutlineUser />
          </div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border-zinc-300 border rounded-md h-10 w-full pl-10 text-black focus:border-indigo-200 focus:ring-indigo-200"
            placeholder="username or email"
            required
          />
        </div>
        {/* password */}
        <label htmlFor="password" className="text-black text-left mt-5">
          Password
        </label>
        <div className="relative mt-2 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            <BiLockOpenAlt />
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white border-zinc-300 border rounded-md h-10 w-full pl-10 text-black focus:border-indigo-200 focus:ring-indigo-200"
            placeholder="•••••"
            required
          />
        </div>
        <div className="flex justify-between mt-4">
          {/* remember account */}
          <label className="remember flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 bg-white text-indigo-500 border-zinc-300 border rounded focus:ring-indigo-500 focus:ring-opacity-25 dark:focus:ring-indigo-500 dark:bg-white"
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span className="text-black ml-3">Remember account</span>
          </label>
          {/* forgot passwor */}
          <span
            // onClick={() => navigate('forgotPassword')}
            className="cursor-pointer text-indigo-500 font-medium"
          >
            Forgot password?
          </span>
        </div>
        <SubmitButton>
          {isLoading ? (
            <AiOutlineLoading3Quarters className='animate-spin' />
          ) : (
            <span className="pb-1">Sign in</span>
          )}
        </SubmitButton>
        <p className="cursor-default text-zinc-500 mt-6">
          Don't have an account?{' '}
          <Link to="/auth/register">
            <span className="font-medium underline text-black">
              Sign up for free
            </span>
          </Link>
        </p>
      </form>
    </>
  )
}
