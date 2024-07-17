import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import NoPage from './pages/noPage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import CartPage from './pages/cart/CartPage'
import AllProduct from './pages/allProduct/AllProduct'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productInfo' element={<ProductInfo/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path="/allproduct" element={<AllProduct/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/user-dashboard' element={<UserDashboard/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/add-product' element={<AddProductPage/>} />
          <Route path='/update-product' element={<UpdateProductPage/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
