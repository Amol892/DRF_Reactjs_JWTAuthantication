import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Logout({setIsLoggedIn}) {

    const navigate = useNavigate()

         async function logoutPage(){
            sessionStorage.clear()
            setIsLoggedIn(sessionStorage.getItem('access'))
            navigate('/login')
    }

  return (
    <>
        <div className='container'>
            <form onSubmit={logoutPage}>
                <center>
                    <h1>Logout confirmation !!</h1>
                    <h3>Do you want to logout</h3>
                    <input type='submit' value='Yes' className='btn btn-success col-4'/>
                    <NavLink to='/home' className='btn btn-warning col-4'>No</NavLink>
                </center>

            </form>
        </div>
    </>
  )
}

export default Logout