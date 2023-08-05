import React from 'react'

const showAlert=(error)=>{
    if(error){
        return (
        <div class="alert alert-danger" role="alert">
            <h3>{error}
            
            </h3>
        </div>
        )
    }
            
}

export default showAlert