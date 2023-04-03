import { NavLink } from 'react-router-dom'

export default function NavSections({ section: { type, items, icons } }) {
  // console.log(section)

  return (
    <div className="text-left">
      <p className="uppercase text-sm text-black font-medium">{type}</p>
      <div className="p-4 capitalize flex flex-col">
        {items.map((item, index) => {
          const Icon = icons[index]
          return (
            <NavLink
              to={`/${item}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending font-light mb-3 flex items-center p-2 pl-6'
                  : isActive
                  ? 'active bg-indigo-200 text-indigo-600 font-regular mb-3 flex items-center p-2 pl-6 rounded'
                  : 'group text-black font-light mb-3 flex items-center p-2 pl-6'
              }
              key={item}
            >
              <Icon className="text-lg text-slate-800 group-hover:text-indigo-500" />
              <p className="ml-4 group-hover:text-indigo-500">{item}</p>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
