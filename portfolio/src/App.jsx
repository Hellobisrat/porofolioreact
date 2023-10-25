import {Outlet} from 'react-router-dom'
import Nav from './components/NavTabs'
import Foot from './components/Footer'
import './App.css'

function App() {


  return (
    <>
    <Nav/>
    <main className="mx-3">
    <Outlet/>
    </main>
    <Foot/>
    
    </>
  )
}

export default App
