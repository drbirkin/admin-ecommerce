import { NavLink } from "react-router-dom"

export default function NavSections({ section }) {
    // console.log(section)
    return <div className="text-left">
        <p className="uppercase">{section.type}</p>
        <div className="p-4 capitalize flex flex-col">
            {section.items.map(item => <NavLink to='' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} key = {item}>{item}</NavLink>
            )}
        </div>
    </div>
}