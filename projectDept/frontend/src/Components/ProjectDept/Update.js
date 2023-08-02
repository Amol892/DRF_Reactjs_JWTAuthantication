import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {

    const {register,setValue,handleSubmit}=useForm()
    const {pk}=useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{fetchData();},[])
    const access = sessionStorage.getItem('access')
    
    async function fetchData(){

      
          const result = await axios.get(`http://localhost:8000/department/projectdetails/${pk}/`)
      
        
        setValue('project_name', result.data.project_name)
        setValue('project_description', result.data.project_description)
        setValue('project_lead', result.data.project_lead)
        setValue('team_size', result.data.team_size)
        setValue('programming_langauge', result.data.programming_langauge.split(","))
        setValue('project_start_date', result.data.project_start_date)
        setValue('project_delivery_date', result.data.project_delivery_date)
        setValue('project_status', result.data.project_status)
        
    }

    async function updateData(data){

        data.programming_langauge = data.programming_langauge.join(",")

        if(access){
        await axios.put(`http://localhost:8000/department/projectdetails/${pk}/`,data,{
          headers : {
            "Authorization":'Bearer'+" "+access
          }
        })

        navigate('/home')
      }
      else{
        navigate('/login')
      }
    }

  return (
    <>
        <div className='container'>
        <h1>Update Project details :</h1><hr/>
        <form onSubmit={handleSubmit(updateData)}>

          <label htmlFor='pn'>Project Name</label>
          <input type='text' id='pn' className='form-control' {...register('project_name')}/><br/><br/>

          <label htmlFor='pd'>Project Description</label>
          <input type='text' id='pd' className='form-control' {...register('project_description')}/><br/><br/>

          <label htmlFor='pm'>Project Manager</label>
          <input type='text' id='pm' className='form-control' {...register('project_lead')}/><br/><br/>

          <label htmlFor='ts'>Team size</label>
          <input type='number' id='ts' className='form-control' {...register('team_size')}/><br/><br/>

          <label htmlFor='pl'>Programming langauge</label><br/><br/>
          <input type='checkbox' id='pl' value='Python'  {...register('programming_langauge')}/><b>Python</b><br/><br/>
          <input type='checkbox' id='pl' value='Java'  {...register('programming_langauge')}/><b>Java</b><br/><br/>
          <input type='checkbox' id='pl' value='C++'  {...register('programming_langauge')}/><b>C++</b><br/><br/>
          

          <label htmlFor='psd'>Project start date</label>
          <input type='text' id='psd' className='form-control' {...register('project_start_date')}/><br/><br/>

          <label htmlFor='pdd'>Project delivery date</label>
          <input type='text' id='pdd' className='form-control' {...register('project_delivery_date')}/><br/><br/>

          <label htmlFor='ps'>Projec status</label><br/><br/>
          <input type='radio' id='ps' value='Started' {...register('project_status')}/><b>Started</b><br/><br/>
          <input type='radio' id='ps' value='In-Process' {...register('project_status')}/><b>In-Process</b><br/><br/>
          <input type='radio' id='ps' value='Complated' {...register('project_status')}/><b>Complated</b><br/><br/>
          

          <input type='submit' value='Update Project details' className='btn btn-success col-4'/><br/><br/>


        </form>
      </div>
    </>
  )
}

export default Update