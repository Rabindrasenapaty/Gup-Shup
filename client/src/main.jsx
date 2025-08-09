import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Home  from './pages/home/Home'
import Login from './pages/aunthetication/Login'
import Signup from './pages/aunthetication/Signup'
import { store } from './pages/store/store.js'
import { Provider } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute.jsx'


  const router=createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute>
        <Home/>
      </ProtectedRoute>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup"
      ,element:<Signup/>
    }
  ])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={router}/>
    
  </Provider>
  
)
