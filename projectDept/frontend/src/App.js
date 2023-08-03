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

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  var access = sessionStorage.getItem('access')
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path='/add' element={<Add/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/update/:pk/' element={<Update/>}/>
        <Route path='delete/:pk/' element={<Delete/>}/>
        <Route path='/logout' element={<Logout/>}/>
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        
        
        
      </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
