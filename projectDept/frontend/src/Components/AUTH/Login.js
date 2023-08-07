import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import showAlert from '../Alert'
import NavBar from '../NavBar'


function Login({setIsLoggedIn}) {

    const {register,handleSubmit}=useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('');
    

        async function saveData(data){
            await axios.post('http://localhost:8000/access/',data).then(response=>{
                
                sessionStorage.setItem('access',response.data.access)     
                setError(response.data.message)
                setIsLoggedIn(sessionStorage.getItem('access'))
                navigate('/home') ;
                   
            }).catch(error=>{
                
                setError(error.response.data.detail)
                   
            }
            )
           
          console.log(sessionStorage.getItem('access'))  
    }
   
  return (
   <>
            
            <div className='container'>
                <h1>Login Form :</h1><hr/>
                
                {showAlert(error)}             
                
                <form onSubmit={handleSubmit(saveData)}>

                    <label htmlFor='un'>Username</label>
                    <input type='text' id='un' className='form-control' {...register('username')}/><br/><br/>

                    <label htmlFor='pw'>Password</label>
                    <input type='password' id='pw' className='form-control' {...register('password')}/><br/><br/>

                    
                    <input type='submit' value='Login me' className='btn btn-success col-4'/><br/><br/>


                </form>
            </div>
   
   
   </>
  )
}

export default Login