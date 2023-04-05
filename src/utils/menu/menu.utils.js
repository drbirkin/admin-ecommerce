import { RxDashboard } from 'react-icons/rx'
import { CgShoppingBag } from 'react-icons/cg'
import { MdOutlineConfirmationNumber } from 'react-icons/md'
import { RiUserSmileLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics, TbDiscount } from 'react-icons/tb'
import { BiStore } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

export const menuItems = [
  {
    type: 'main menu',
    items: [{menu:'home'}, {menu:'orders'}, {menu: 'products', subitems: [{menu: 'overview'}, {menu: 'inventory'}]}, {menu: 'customers'}, {menu: 'reports'}, {menu: 'discounts'}],
    icons: [
      RxDashboard,
      CgShoppingBag,
      MdOutlineConfirmationNumber,
      RiUserSmileLine,
      TbDeviceDesktopAnalytics,
      TbDiscount,
    ],
  },
  {
    type: 'online store',
    items: [{menu: 'store'}],
    icons: [BiStore],
  },
  {
    type: 'account',
    items: [{menu: 'settings'}],
    icons: [FiSettings],
  },
]
