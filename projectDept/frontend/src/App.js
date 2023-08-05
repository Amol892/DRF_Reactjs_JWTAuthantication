import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './Components/ProjectDept/Add';
import Home from './Components/ProjectDept/Home';
import Update from './Components/ProjectDept/Update';
import Delete from './Components/ProjectDept/Delete';
import Signup from './Components/AUTH/Signup';
import Login from './Components/AUTH/Login';
import Logout from './Components/AUTH/Logout';
import { useState } from 'react';
import AccountActivation from './Components/Account_activation';



function App() {

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated)
  return (
    <>
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} />

      <Routes>
        
          
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
    
          <Route path='/add' element={<Add isAuthenticated={isAuthenticated}/>}/>      
          <Route path='/home' element={<Home isAuthenticated={isAuthenticated}/>}/>
          <Route path='/update/:pk/' element={<Update/>}/>
          <Route path='delete/:pk/' element={<Delete/>}/>
          <Route path='/logout' element={<Logout setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path='/activate/:uid/:token/' element={<AccountActivation/>}/>
        
      </Routes>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
