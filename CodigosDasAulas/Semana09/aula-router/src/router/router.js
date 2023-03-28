export const rotas = createBrowserRouter([
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

export function RouterProvider({children}){
    return (
        <RouterProvider router={rotas}>
            {children}
        </RouterProvider>
    )
} 