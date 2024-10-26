import './App.css'
import Contact from './pages/contact/contact'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/home/header'
import TopHeader from './pages/home/topHeader'
function App() {
  return (
    <>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  
  )
}

export default App
