import { useContext } from "react"
import Home from "./Components/Home/Home"
import Dashboard from "./Components/dashboard/Dashboard"
import { contextData } from "./Providers/ContextProviders/ContextProviders"


function App() {
  const { setShow, show, showText } = useContext(contextData)

  return (
    <>
      <div className={`lg:flex justify-start ${showText ? 'gap-[1%]' : 'gap-[5%]'}`}>
        <div className={` ${showText ? 'xl:w-[17%] lg:w-[21%] w-[30%]' : 'w-[70px]'} `}>
          <Dashboard />
        </div>

        <div className={`xl:w-[82%] lg:w-[78%] w-full ${showText ? 'xl:w-[82%] lg:w-[78%]' : 'w-[calc(100%-70px)]'}`}>
          <Home />
        </div>

      </div>
    </>
  )
}

export default App
