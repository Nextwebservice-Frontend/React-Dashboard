import Home from "./Components/Home/Home"
import Dashboard from "./Components/dashboard/Dashboard"


function App() {


  return (
    <>
      <div className="flex">

        <div className="w-[12%]">
          <Dashboard />
        </div>

        <div className="w-[88%]">
          <Home />
        </div>

      </div>
    </>
  )
}

export default App
