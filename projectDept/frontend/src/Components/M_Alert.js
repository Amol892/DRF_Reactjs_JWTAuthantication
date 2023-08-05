import React from 'react'

const messageAlert=(message)=>{
    if(message){
        return (
        <div class="alert alert-danger" role="alert">
            <h3>{message}
            
            </h3>
        </div>
        )
    }
            
}

export default messageAlert