import { NavLink } from 'react-router-dom'
import {RiArrowDropDownLine} from 'react-icons/ri'

export default function NavSections({ section: { type, items, icons } }) {
  // console.log(section)

  return (
    <div className="text-left">
      <p className="uppercase text-sm text-black font-medium">{type}</p>
      <div className="p-4 capitalize flex flex-col">
        {items.map(({menu, subitems}, index) => {
          const Icon = icons[index]
          return (
            <>
              <NavLink
                to={`/${menu !== 'home' ? menu : ''}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending font-light mb-3 flex items-center p-2 pl-6 relative'
                    : isActive
                    ? 'active bg-indigo-100 text-indigo-500 font-regular mb-3 flex items-center p-2 pl-6 rounded relative group'
                    : 'group text-black mb-3 flex items-center p-2 pl-6 relative'
                }
                key={menu}
              >
                <Icon className="text-lg text-slate-800 group-hover:text-indigo-500" />
                <p className="ml-4 group-hover:text-indigo-500">{menu}</p>
                {subitems?.length && 
                  <RiArrowDropDownLine className='absolute right-2 text-3xl transition-all ease-linear group-[.active]:rotate-180'/>
                }
              </NavLink>

              {subitems?.length && (
                <div className='text-left mb-6'>
                  {subitems.map(({menu}, index) => <NavLink to = {`products/${index ? menu : ''}`} 
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending font-light flex items-center p-2 pl-20'
                      : isActive
                      ? 'active  text-indigo-500 font-regular flex items-center p-2 pl-20 rounded'
                      : 'group text-slate-700 flex items-center p-2 pl-20'
                  }
                  key={menu}>
                    <p>{menu}</p>
                  </NavLink>)}
                </div>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}
