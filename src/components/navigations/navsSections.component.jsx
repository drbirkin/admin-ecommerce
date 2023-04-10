import { NavLink } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function NavSections({ section: { type, items, icons } }) {
  return (
    <div className="text-left">
      <p className="uppercase text-sm text-black font-medium">{type}</p>
      <div className="p-4 capitalize flex flex-col">
        {items.map(({ menu, subitems }, index) => {
          const Icon = icons[index]
          return (
            <>
              <NavLink
                to={`/${menu !== 'home' ? menu : ''}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending font-light mt-3 flex items-center p-2 pl-6 relative'
                    : isActive
                    ? `active ${
                        subitems?.length ? 'submenu-active' : ''
                      } bg-indigo-100 text-indigo-500 font-regular mt-3 flex items-center p-2 pl-6 rounded relative group peer`
                    : 'group text-black mt-3 flex items-center p-2 pl-6 relative'
                }
                key={menu}
              >
                <Icon className="text-lg text-slate-800 group-hover:text-indigo-500" />
                <p className="ml-4 group-hover:text-indigo-500">{menu}</p>
                {subitems?.length && (
                  <RiArrowDropDownLine className="absolute text-slate-400 right-2 text-3xl transition-all ease-linear group-[.active]:rotate-180" />
                )}
              </NavLink>

              {subitems?.length && (
                <div
                  className={`text-left max-h-0 overflow-hidden transition-all ease-in-out duration-300	peer-[.submenu-active]:max-h-44`}
                >
                  {subitems.map(({ menu }, index) => (
                    <NavLink
                      to={`products/${index ? menu : ''}`}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? 'pending font-light flex items-center p-2 pl-20'
                          : isActive
                          ? 'active text-indigo-500 font-regular flex items-center p-2 pl-20 rounded'
                          : 'group text-slate-700 flex items-center p-2 pl-20'
                      }
                      key={menu}
                    >
                      <p>{menu}</p>
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}
