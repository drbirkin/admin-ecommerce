export function SubmitButton ({children}) {
    return <button type="submit"
    className="button bg-indigo-600 mt-8 hover:bg-indigo-500 transition-all focus:outline-indigo-200 focus:outline-2 focus:outline focus:outline-offset-2 flex justify-center items-center h-11 p-0">
        {children}
    </button> 
}