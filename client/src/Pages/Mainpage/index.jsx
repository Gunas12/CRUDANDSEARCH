import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function Index() {
  return (
    <>
  <div className=' navbar'>
<div className='container'>
<span className='brand'>Notary</span>
 <ul >
    <li><Link to="/" className='link_A'>Home</Link></li>
    <li><Link to="add" className='link_A'>Add</Link></li>
    <li>SEARCH: <input type="text"/></li>
    </ul>
 </div>
</div>
    <Outlet/>
    </>
  )
}

export default Index
