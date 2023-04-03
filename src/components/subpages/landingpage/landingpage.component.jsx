import { useParams } from "react-router-dom"


export default function LandingPage() {
  const {pageType} = useParams()
  console.log(pageType)
  return (
    <div className="flex justify-center items-center w-full h-[93%] bg-light-blue text-black">
      {pageType} Page
    </div>
  )
}
