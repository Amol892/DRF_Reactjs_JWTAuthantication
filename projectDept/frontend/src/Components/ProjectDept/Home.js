import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Plot from 'react-plotly.js';

function Home() {

  useEffect(()=>{fetchData();},[])
  const [user,setUser]=useState([])

  async function fetchData(){
    const result = await axios.get('http://localhost:8000/department/projectdetails/')
    setUser(result.data)
  }

    const project_name = user.map(obj=>(obj.project_name))
    
    const weeks_count = user.map(obj=>(parseInt(obj.remaining_weeks,10)))
    
    var data1=[{
      type:'bar',
      x:weeks_count,
      y:project_name,
      orientation:'h'
      
    }]

  return (
    
    <div className='container'>
      <Plot data={data1}
                layout={ {autosize: false,width: 700, height: 500, title: 'Remaining weeks for project complation', margin: {
                  l: 300,
                  r: 0,
                  b: 100,
                  t: 100,
                  pad: 4
                }} }
          /> 
      <h1>Project details:</h1><hr/>
      <table className='table'>
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Project Manager</th>
            <th>Project Team size </th>
            <th>Programming lanagauges</th>
            <th>Project start date</th>
            <th>Project Dellivery date</th>
            <th>Total weeks</th>
            <th>Remaining weeks</th>
            <th>Project Status</th>
            
          </tr>
        </thead>
        <tbody>
          {
            user.map(obj=>{
              return(
                <tr>
                  <td>{obj.id}</td>
                  <td>{obj.project_name}</td>
                  <td>{obj.project_description}</td>
                  <td>{obj.project_lead}</td>
                  <td>{obj.team_size}</td>
                  <td>{obj.programming_langauge}</td>
                  <td>{obj.project_start_date}</td>
                  <td>{obj.project_delivery_date}</td>
                  <td>{obj.weeks}</td>
                  <td>{obj.remaining_weeks}</td>
                  <td>{obj.project_status}</td>
                  <td><NavLink to={`/update/${obj.id}`} className='btn btn-warning col-12'>Update</NavLink></td>
                  <td><NavLink to={`/delete/${obj.id}`} className='btn btn-danger col-12'>Delete</NavLink></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home