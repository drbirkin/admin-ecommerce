import NavSections from './navsSections.component'
import { menuItems } from '../../utils/menu/menu.utils'

export default function NavItems() {
  // * https://dribbble.com/shots/20108403-Odasta-Admin-Dashboard
  return (
    <div className="mt-4 p-4">
      {menuItems.map((item, index) => (
        <div
          className={`${index ? 'mt-9' : 'mt-4'} ${
            index < menuItems.length - 1
              ? 'border-b boder-solid border-b-slate-200'
              : ''
          }`}
          key={item.type}
        >
          <NavSections section={item} />
        </div>
      ))}
    </div>
  )
}
