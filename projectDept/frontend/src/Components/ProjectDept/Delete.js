import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {

    const {pk}=useParams()
    const navigate = useNavigate()
    const access = sessionStorage.getItem('access')
    function deleteData(){

        if(access){
        axios.delete(`http://localhost:8000/department/projectdetails/${pk}/`,{
            headers : { "Authorization": 'Bearer'+" "+access}
        })

        navigate('/home')
        }
        else
        {
            navigate('/login')
        }
    }

  return (
    <>
        <div className='container'>
            <form onSubmit={deleteData}>

                <center>
                    <h1>Delete confirmation !!</h1>
                    <h3>Are you want to delete Records</h3>
                    <input type='submit' value='Yes' className='btn btn-warning col-4'/>
                    <NavLink className='btn btn-danger col-4' to="/home">No</NavLink>
                </center>
            </form>
        </div>
    
    </>
  )
}

export default Delete