import { useParams, Outlet } from 'react-router-dom'

export default function LandingPage() {
  const { pageType } = useParams()
  // console.log('check:', useParams())
  // if(!pageType) <Navigate to = "/home"/>
  return (
    <div className="flex justify-center items-center w-full h-[93%] bg-light-blue text-black">
      <Outlet />
    </div>
  )
}
