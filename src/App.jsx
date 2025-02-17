import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/auth/Login'


function App() {


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
