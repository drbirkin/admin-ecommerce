import { AiOutlineUser } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

// buttons
import { SubmitButton } from '../../buttons/buttons.component'
export default function RegisterForm() {
  return (
    <>
      <h1 className="text-black font-semibold text-4xl font-open-sans">
        Create a new account
      </h1>
      <form className="w-full flex flex-col">
        {/* name */}
        <label htmlFor="username" className="text-black text-left mt-5">
          Username
        </label>
        <div className="group relative mt-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            <AiOutlineUser />
          </div>
          <input
            type="text"
            id="username"
            className="bg-white border-zinc-300 border rounded-md h-10 w-full pl-10 text-black focus:border-indigo-200 focus:ring-indigo-200"
            placeholder="username"
            required
          />
        </div>
        {/* email */}
        <label htmlFor="email" className="text-black text-left mt-5">
          Email
        </label>
        <div className="group relative mt-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            <HiOutlineMail />
          </div>
          <input
            type="email"
            id="email"
            className="bg-white border-zinc-300 border rounded-md h-10 w-full pl-10 text-black focus:border-indigo-200 focus:ring-indigo-200"
            placeholder="example@email.com"
            required
          />
        </div>
        {/* password */}
        <label htmlFor="password" className="text-black text-left mt-5">
          Password
        </label>
        <div className="relative mt-2 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            <BiLockAlt />
          </div>
          <input
            type="password"
            id="password"
            className="bg-white border-zinc-300 border rounded-md h-10 w-full pl-10 text-black focus:border-indigo-200 focus:ring-indigo-200"
            placeholder="•••••"
            required
          />
        </div>
        {/* confirm password */}
        <label htmlFor="confirmpassword" className="text-black text-left mt-5">
          Confirm password
        </label>
        <div className="relative mt-2 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
            <BiLockAlt />
          </div>
          <input
            type="password"
            id="confirmpassword"
            className="bg-white border-zinc-300 border rounded-md h-10 w-full pl-10 text-black focus:border-indigo-200 focus:ring-indigo-200"
            placeholder="•••••"
            required
          />
        </div>

       <SubmitButton>
          <span className="pb-1">Sign up</span>
       </SubmitButton>
        <p className="cursor-default text-zinc-500 mt-6">
          Already have an account?{' '}
          <Link to="/auth/login">
            <span className="font-medium underline text-black">
              Sign in here
            </span>
          </Link>
        </p>
      </form>
    </>
  )
}
