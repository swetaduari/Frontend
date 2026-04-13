import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import ProductsApp from './components/pages/ProductsApp.jsx'
import PageNotFound from './components/pages/PageNotFound.jsx'
import CartApp from './components/pages/CartApp.jsx'
import CheckoutApp from './components/pages/CheckoutApp.jsx'
import FeedbackApp from './components/pages/FeedbackApp.jsx'
import GalleryApp from './components/pages/GalleryApp.jsx'
import OrderSuccessApp from './components/pages/OrderSuccessApp.jsx'
import ProductDetailsApp from './components/pages/ProductDetailsApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import './scripts.js'
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/products' element={<ProductsApp />} />
      <Route path='/cart' element={<CartApp />} />
      <Route path='/checkout' element={<CheckoutApp />} />
      <Route path='/feedback' element={<FeedbackApp />} />
      <Route path='/gallery' element={<GalleryApp />} />
      <Route path='/order-success' element={<OrderSuccessApp />} />
      <Route path='/product-details' element={<ProductDetailsApp />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
   </Router> 
  </StrictMode>,
)
