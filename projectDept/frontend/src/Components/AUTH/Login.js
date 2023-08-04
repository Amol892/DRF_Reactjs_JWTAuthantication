import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login({setIsAuthenticated }) {

    const {register,handleSubmit}=useForm()
    const navigate = useNavigate()

    async function saveData(data){
        const result = await axios.post('http://localhost:8000/access/',data)
            console.log(result.data.access)
            sessionStorage.setItem('access',result.data.access)
            sessionStorage.setItem('refresh',result.data.refresh)
            
            setIsAuthenticated(true)      
            
            navigate('/home')

    }

  return (
   <>

            <div className='container'>
                <h1>Login Form :</h1><hr/>
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