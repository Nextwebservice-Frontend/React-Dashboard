import Home from "./Components/Home/Home"
import Dashboard from "./Components/dashboard/Dashboard"


function App() {


  return (
    <>
      <div className="lg:flex justify-start gap-[1%]">
        <div className="xl:w-[17%] lg:w-[21%] w-[30%]">
          <Dashboard />
        </div>

        <div className="xl:w-[82%] lg:w-[78%] w-full">
          <Home />
        </div>

      </div>
    </>
  )
}

export default App
