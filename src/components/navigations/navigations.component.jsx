import { Outlet } from "react-router-dom"

export default function Navigations () {
    return <>
        <div className="h-full bg-white w-64 border-r border-solid border-r-slate-200"></div>
        <Outlet/>
    </>
}