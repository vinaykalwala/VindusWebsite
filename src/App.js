import Layout from './Components/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Products from './pages/products'
import CaseStudies from './pages/casestudies'
import Career from './pages/career'
import Contact from './pages/contact'
import WhyChoose from './pages/whychoose'
import Howitworks from './pages/howitworks'

import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

import Security from './pages/Security'
import CookiesSettings from './pages/CookiesSettings'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/career' element={<Career />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/whychoose' element={<WhyChoose />} />
          <Route path='/howitworks' element={<Howitworks />} />


          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-use" element={<TermsOfUse/>} />

          <Route path="/security" element={<Security/>} />
          <Route path="/cookies-settings" element={<CookiesSettings/>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
