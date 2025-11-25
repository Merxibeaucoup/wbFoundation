import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Donate from "./pages/Donate"
import Success from "./pages/Success"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
