import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

// importar as páginas
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import PaginaErro from "./pages/PaginaErro"

// 1 = [x] criar o browser com as rotas

/* 
  3 - [x] criar a rota padrão
*/
const rotas = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login />,
  //   // aqui as regras de bloqueio
  // },
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      // todas as rotas agora passam a ser configuradas aqui
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // 2 - [x] configurar o router provider
  <React.StrictMode>
    {/* // aqui vai o context */}
    <RouterProvider router={rotas}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
