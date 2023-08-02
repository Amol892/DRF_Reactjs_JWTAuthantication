import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {

        const {register,handleSubmit}=useForm()
        const navigate = useNavigate()

        async function saveData(data){
               await axios.post('http://localhost:8000/accounts/register/',data)
               navigate('/login')
        }

  return (
    <>
            <div className='container'>
                <h1>SignUp Form :</h1><hr/>
                <form onSubmit={handleSubmit(saveData)}>

                    <label htmlFor='fn'>First Name</label>
                    <input type='text' id='fn' className='form-control' {...register('first_name')}/><br/><br/>

                    <label htmlFor='ln'>Last Name</label>
                    <input type='text' id='ln' className='form-control' {...register('last_name')}/><br/><br/>

                    <label htmlFor='un'>Username</label>
                    <input type='text' id='un' className='form-control' {...register('username')}/><br/><br/>

                    <label htmlFor='ps'>Password</label>
                    <input type='password' id='psd' className='form-control' {...register('password')}/><br/><br/>

                    <label htmlFor='em'>Email Id</label>
                    <input type='email' id='em' className='form-control' {...register('email')}/><br/><br/>

                    <label htmlFor='pn'>Phone Number</label><br/><br/>
                    <input type='text' id='pn'  className='form-control' {...register('phone_number')}/><br/><br/>

                    <label htmlFor='gen'>Gender</label><br/><br/>
                    <input type='radio' id='gen' value='Male' {...register('gender')}/><b>Male</b><br/><br/>
                    <input type='radio' id='gen' value='Female' {...register('gender')}/><b>Female</b><br/><br/>
                    <input type='radio' id='gen' value='Other' {...register('gender')}/><b>Other</b><br/><br/>


                    <label htmlFor='ad'>Address</label>
                    <input type='text' id='ad' className='form-control' {...register('address')}/><br/><br/>

                    <label htmlFor='ld'>Landmark</label>
                    <input type='text' id='ld' className='form-control' {...register('landmark')}/><br/><br/>

                    <label htmlFor='con'>Country</label>
                    <input type='text' id='con' className='form-control' {...register('country')}/><br/><br/>

                    <label htmlFor='st'>State</label>
                    <input type='text' id='st' className='form-control' {...register('state')}/><br/><br/>

                    <label htmlFor='ct'>City</label>
                    <input type='text' id='ct' className='form-control' {...register('city')}/><br/><br/>



                    <input type='submit' value='Register' className='btn btn-success col-4'/><br/><br/>


                </form>
            </div>
            
    </>
  )
}

export default Signup