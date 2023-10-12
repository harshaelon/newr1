import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes
,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import News from './users/News';
import UserPhoto from './users/UserPhoto';
import Profile from './users/Profile';
import Login from './layout/Login';
import Logout from './layout/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import UserProf from './users/UserProf';
import InstaPosts from './users/InstaPost';
//import Example from './users/Example';

//import Posts from './users/Posts';
//import "@mobiscroll/react/dist/css/mobiscroll.min.css";
const clientId="849129082731-qskc577e7efifla11i6av8b7t1j0bo6r.apps.googleusercontent.com";

export function App() {
  
    useEffect(() =>{
      function start(){
        gapi.client.init({
          clientId:clientId,
          scope:""
        })
      };
      gapi.load('client:auth2',start);
    });
  
  return (
    <div className="App">
      {/* <Login/>
      <Logout/> */}
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path ="/adduser" element={<AddUser/>}/>
      <Route exact path = "/edituser/:id" element={<EditUser/>}/>
      <Route exact path ="/examp" element={<UserPhoto/>}/>
     <Route exact path = "/login" element={<Login/>}/>
      <Route exact path = "/logout" element={<UserProf/>}/>

      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
