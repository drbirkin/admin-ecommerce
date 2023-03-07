import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export function LoginForm() {
  return (
    <form className="w-full flex flex-col">
      <label htmlFor="email" className="text-black text-left mt-5">
        Email or username
      </label>
      <input
        type="text"
        id="username"
        className="bg-white border-zinc-300 border rounded-md h-10 mt-2 text-black focus:border-indigo-500 focus:ring-indigo-200"
        placeholder="username or email"
        required
      />
      <label htmlFor="email" className="text-black text-left mt-5">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="bg-white border-zinc-300 border rounded-md h-10 mt-2 text-black focus:border-indigo-500 focus:ring-indigo-200"
        placeholder="•••••"
        required
      />
      <div className="flex justify-between mt-4">
        <label className="remember flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 bg-white text-indigo-500 border-zinc-300 border rounded focus:ring-indigo-500 focus:ring-opacity-25 dark:focus:ring-indigo-500 dark:bg-white"
            // value={remember}
          />
          <span className="text-black ml-3">Remember account</span>
        </label>
        
        <span
          // onClick={() => navigate('forgotPassword')}
          className="forget cursor-pointer text-indigo-500 font-medium"
        >
          Forgot password?
        </span>
      </div>
      <button
        type="submit"
        className="button bg-indigo-600 mt-8 hover:bg-indigo-500 transition-all"
        // onClick={() => setLoading(!loading)}
      >
        <span className="pb-1">Sign in</span>
      </button>
    </form>
  )
}
