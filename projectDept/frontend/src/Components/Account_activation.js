import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AccountActivation = () => {
  const { uid,token } = useParams();
  const [message, setMessage] = useState('');
    console.log(uid,token)
  useEffect(() => {
    axios.get(`http://localhost:8000/activate/${uid}/${token}/`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error: Invalid activation link');
      });
  }, [uid,token]);

  return (
    <div class="alert alert-success" role="alert">
            <h3>{message}
            
            </h3>
        </div>
  );
};

export default AccountActivation;