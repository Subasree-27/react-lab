Main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Post from './Post'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Post' element={<Post />}></Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)

Home.jsx

import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <h3>Hi , Click here to go to the page: Post.jsx
        <Link to="/post">Go</Link></h3>
    </div>
  )
}

export default Home

Post.jsx

import React from 'react'

function Post() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Tempora veniam alias minima laboriosam cumque incidunt autem
        dolorum illum unde expedita, fugiat beatae sint consectetur omnis, 
        consequuntur iste nobis neque excepturi.</p>
    </div>
  )
}

export default Post
