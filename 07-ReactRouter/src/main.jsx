import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact'
import User from './Components/User/user'
import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub'

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [{
//     path: '',
//     element: <Home />
//   },
//   {
//     path: 'about',
//     element: <About />
//   },
//   {
//     path: 'contact',
//     element: <Contact />
//   }]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<GitHub />} loader={githubInfoLoader}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)