import { Outlet } from 'react-router-dom'

export default function Cover() {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-0">
      <Outlet />
      <div className="col-span-2 h-full bg-black-200"></div>
    </div>
  )
}
