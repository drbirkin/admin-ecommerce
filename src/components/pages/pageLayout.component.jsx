import { Outlet, useParams, Navigate } from 'react-router-dom'

export default function PageLayout() {
  // const {pageType} = useParams()
  // if(!pageType) return (<Navigate to = "/home"/>)

  return (
    <div className="flex-col w-full">
      <div className="h-[7%] w-full border-b border-solid border-b-slate-200 bg-whitesmoke"></div>
      <Outlet />
    </div>
  )
}
