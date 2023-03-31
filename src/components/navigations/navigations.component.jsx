import { Outlet } from "react-router-dom"
import Brand from "./brand.component"
import NavItems from "./navitems.component"

export default function Navigations () {
    return <>
        <div className="h-full w-64 flex-col bg-white  border-r border-solid border-r-slate-200">
            <Brand/>
            <NavItems/>
        </div>
        <Outlet/>
    </>
}