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
    const weeks_count = user.map(obj=>(parseInt(obj.weeks,10)))
    const R_weeks_count = user.map(obj=>(parseInt(obj.remaining_weeks,10)))
    const team_size_count = user.map(obj=>(parseInt(obj.team_size,10)))
    var data2 = [{
      type:'bar',
      x:project_name,
      y:team_size_count,
      name:'Team members',
      text : team_size_count,
      marker : {color : 'purple'},
    }]
    var data1=[{
      type:'bar',
      x:weeks_count,
      y:project_name,
      orientation:'h',
      name:'Total weeks',
      text : weeks_count
    },
    {
      type:'bar',
      x:R_weeks_count,
      y:project_name,
      orientation:'h',
      name : 'Remaining Weeks',
      text : R_weeks_count
    }
  ]

  var layout = {autosize: false,
                width: 700, height: 500, 
                title: 'Total weeks and Remaining weeks for project complation', 
                margin: {l: 300,r:0,b: 100,t: 100,pad: 4},
                barmode : 'overlay',
                xaxis :{title:'Number of Weeks'},
                
              }

  var layout1 = {autosize: false,
                width: 700, height: 500, 
                title: 'Total team members for each project', 
                margin: {l: 300,r:0,b: 100,t: 100,pad: 4},
                
                xaxis :{title:'Number of team members'},
                
              }

  //Graph CSS style
  const graphStyle = {
    border: '2px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
  };

  return (
    <>
    <div style={graphStyle}>
      <Plot data={data1} layout={layout}/> 
      <Plot data={data2} layout={layout1}/>
    </div>

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
    
    </>
  )
}

export default Home