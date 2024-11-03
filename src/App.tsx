import './App.css'
import Contact from './pages/contact/contact'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/home/header'
import TopHeader from './pages/home/topHeader'
import SignUp from './pages/auth/SignUp'
import { NotFound } from './components/common/NotFound'
import Footer from './pages/home/footer'
import ImageSlider from './pages/product/ProductDetails'

function App() {
  return (
    <>
      <TopHeader />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/product' element={<ImageSlider />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  
  )
}

export default App
