import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import showAlert from '../Alert'


function Login({setIsAuthenticated }) {

    const {register,handleSubmit}=useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('');
    
    async function saveData(data){
            await axios.post('http://localhost:8000/access/',data).then(response=>{
                setError(response.data.message)
                sessionStorage.setItem('access',response.data.access)
                sessionStorage.setItem('access',response.data.refresh)
                setIsAuthenticated(true)      
                navigate('/home')     
            }).catch(error=>{
                
                setError(error.response.data.detail)
                
                
            }
            )
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