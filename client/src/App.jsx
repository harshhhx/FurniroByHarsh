import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import Contact  from './pages/Contact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/details" element={<Details />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App