import Home from "./Components/Home/Home"
import Dashboard from "./Components/dashboard/Dashboard"


function App() {


  return (
    <>
      <div className="flex justify-start gap-[1%]">
        <div className="w-[14%]">
          <Dashboard />
        </div>

        <div className="w-[85%]">
          <Home />
        </div>

      </div>
    </>
  )
}

export default App
