
import './App.css'
import { AuthProvider } from './auth/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Restaurants from './pages/Restaurants'
import Login from './pages/Login'
import Orders from './pages/Orders'
import AdminOrders from './pages/AdminOrders'
import Menu from './pages/Menu'

function App() {
  

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/restaurants' element={ <ProtectedRoutes><Restaurants/></ProtectedRoutes>}/>
          <Route path='/menu/:restaurantId' element={ <ProtectedRoutes><Menu/></ProtectedRoutes>}/>
          <Route path='/orders' element={ <ProtectedRoutes><Orders/></ProtectedRoutes>}/>
          <Route path='/orders/admin' element={ <ProtectedRoutes role="ADMIN"><AdminOrders/></ProtectedRoutes>}/>
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
