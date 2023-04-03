import { NavLink } from 'react-router-dom'

export default function NavSections({ section: { type, items, icons } }) {
  // console.log(section)

  return (
    <div className="text-left mt-6">
      <p className="uppercase text-sm text-black font-medium mb-3">{type}</p>
      <div className="p-4 capitalize flex flex-col">
        {items.map((item, index) => {
          const Icon = icons[index]
          return (
            <NavLink
              to={`/${type}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending font-light mb-6 flex items-center'
                  : isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-black font-light mb-6 flex items-center'
              }
              key={item}
            >
              <Icon className="text-lg text-slate-800" />
              <p className="ml-4">{item}</p>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
