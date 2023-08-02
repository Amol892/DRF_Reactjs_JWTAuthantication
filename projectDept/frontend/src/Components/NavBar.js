import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
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
        <NavLink style={{marginLeft:'60px'}} className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        <NavLink style={{marginLeft:'60px'}} className="nav-link" to="/add">Project</NavLink>
        <NavLink style={{marginLeft:'900px'}} className="nav-link" to="/logout">Logout</NavLink>
        <NavLink style={{marginLeft:'60px'}} className="nav-link" to="/signup">SignUp</NavLink>
        <NavLink style={{marginLeft:'60px'}} className="nav-link" to="/login">Login</NavLink>
        
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default NavBar