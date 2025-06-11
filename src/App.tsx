import { Outlet } from 'react-router-dom'
import './App.css'
import MainHeader from './components/header'

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export default App
