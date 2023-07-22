import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <Provaider> */}
      <RouterProvider router={router}></RouterProvider>
    {/* </Provaider> */}
  </React.StrictMode>,
)
