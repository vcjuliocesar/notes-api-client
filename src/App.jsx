import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/auth/Login'
import Register from "./components/auth/Register"


function App() {


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
