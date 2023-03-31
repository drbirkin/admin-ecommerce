import NavSections from "./navsSections.component";

export default function NavItems () {
    const menuItems = [
        {
            type: 'main menu',
            items: [
                'home',
                'orders',
                'products',
                'customers',
                'reports',
                'discounts'
            ]
        },
        {
            type: 'online store',
            items: [
                'store'
            ]
        },
        {
            type: 'account',
            items: [
                'settings'
            ]
        }
    ]

    return <div className="mt-6 p-3">
        {menuItems.map(item => (<NavSections section = {item} key = {item.type}/>))}
    </div>
}