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
import MyState from './context/myState'
import { Toaster } from 'react-hot-toast'
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser'
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin'

function App() {

  return (
    <MyState>
      <Router>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productInfo/:id' element={<ProductInfo/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path="/allproduct" element={<AllProduct/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />

          <Route path='/user-dashboard' element={
            <ProtectedRouteForUser>
              <UserDashboard/>
            </ProtectedRouteForUser>
          } />

          <Route path='/admin-dashboard' element={
            <ProtectedRouteForAdmin>
              <AdminDashboard/>
            </ProtectedRouteForAdmin>
          } />

          <Route path='/add-product' element={
            <ProtectedRouteForAdmin>
              <AddProductPage/>
            </ProtectedRouteForAdmin>
          } />

          <Route path='/update-product/:id' element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage/>
            </ProtectedRouteForAdmin>
          } />

          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
