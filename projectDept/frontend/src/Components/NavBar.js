import React from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
function NavBar({isAuthenticated}) {

  
  
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-info bg-info">
  <div className="container-fluid" style={{ height: '80px', fontSize: '24px', /* other custom styles */ }}>
    <NavLink style={{fontSize: '40px',color:'brown'}} className="navbar-brand" to="/home"><b>Micro</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
            {!isAuthenticated && (
              <>
                <NavLink style={{marginLeft:'1200px',fontSize:'50px'}} className="nav-link" to="/signup"><b>SignUp</b></NavLink>
                <NavLink style={{marginLeft:'100px',fontSize:'50px'}} className="nav-link" to="/login"><b>Login</b></NavLink>
              </>
            )}

            {isAuthenticated && (
              <>
                <NavLink style={{marginLeft:'60px',fontSize:'50px'}} className="nav-link active" aria-current="page" to="/home"><b>Home</b></NavLink>
                <NavLink style={{marginLeft:'60px',fontSize:'50px'}} className="nav-link" to="/add"><b>Project</b></NavLink>
                <NavLink  style={{marginLeft:'900px',fontSize:'50px',color:'red'}} className="nav-link" to="/logout"><b>Logout</b></NavLink>
              </>
            )}
          
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default NavBar