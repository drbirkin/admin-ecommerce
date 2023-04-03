import NavSections from './navsSections.component'
import { menuItems } from '../../utils/menu/menu.utils'

export default function NavItems() {
  // * https://dribbble.com/shots/20108403-Odasta-Admin-Dashboard
  return (
    <div className="mt-6 p-3">
      {menuItems.map((item) => (
        <NavSections section={item} key={item.type} />
      ))}
    </div>
  )
}
