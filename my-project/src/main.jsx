import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Send from './Sends/Send.jsx'
import Received from './Received/Received.jsx'
import Upload from './Upload/Upload.jsx'
import Test from './test.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/send',
    element:<Send />,
  },
  {
    path:'/received',
    element:<Received />,
  },
  {
    path:'/upload',
    element:<Upload />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
