import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import ROUTES from './config/routes'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Homepage />}/>
          <Route path={ROUTES.LOGIN} element={<Login />}/>
          <Route path={ROUTES.REGISTER} element={<Register />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App