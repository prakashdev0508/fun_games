import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Precision from './pages/Precision'
import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/precision-game' element={<Precision />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App