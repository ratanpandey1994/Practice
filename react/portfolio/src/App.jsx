import { About } from "./Components/About/About"
import { Home } from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
