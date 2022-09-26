
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Login from './pages/restrictedViews/SortedViews/Auth/Auth/Login';
import Register from './pages/restrictedViews/SortedViews/Auth/Auth/Register';
import UpdateProfile from './components/User/Profile/UserViews/UpdateProfile';
import UserProfile from './components/User/Profile/UserViews/UserProfile';
import Dogs from './pages/restrictedViews/SortedViews/Dogs/Dogs';
import Dog from './pages/restrictedViews/SortedViews/Dogs/Dog';
import Handlers from './pages/restrictedViews/SortedViews/Handlers/Handlers';
import Handler from './pages/restrictedViews/SortedViews/Handlers/Handler';
import Clubs from './pages/restrictedViews/SortedViews/Clubs/Clubs';
import Club from './pages/restrictedViews/SortedViews/Clubs/Club';
import Home from './pages/Home';




function App() {
  return (

  
  
    <Routes>
     <Route path = '/' element = {<Layout />} >
      <Route path = '/' element = {<Home />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/register' element = {<Register />} />

      <Route path = '/user:id' element = {<UserProfile />} />
      <Route path = '/user/updateprofile/:id' element = {<UpdateProfile />} />

      <Route path = '/dogs' element = {<Dogs  />} />
      <Route path = '/dogs:id' element = {<Dog/> } />

      <Route path = '/handlers' element = {<Handlers  />} />
      <Route path = '/handers/:id' element = {<Handler/> } />

      <Route path = '/clubs' element = {<Clubs  />} />
      <Route path = '/clubs/:id' element = {<Club/> } />
      </Route>
        

     
    </Routes>
    
   
  )
}

export default App;
