import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductList from './pages/ProductList'
import { 
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
