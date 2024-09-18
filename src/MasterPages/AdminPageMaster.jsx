import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminPageMaster = () => {
  return (
    <>
        <div className='d-flex' style={{minHeight:'100vh'}}>
            <div className='w-25 bg-dark text-white'>
                <nav className='nav'>
                    <ul style={{listStyle:'none'}}>
                        <li className='nav-item'>
                            <NavLink className={'nav-link'} to={'/admin/usermanagement'}>User Management</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink  className={'nav-link'}  to={'/admin/productmanagement'}>Product Management</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='w-75'>
                <div className='py-3 bg-dark text-end text-white'>Header</div>
                <Outlet />
            </div>
        </div>

    </>
  )
}

export default AdminPageMaster