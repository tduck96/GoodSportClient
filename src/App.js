
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Login from './pages/public/Auth/Auth/Login';
import Register from './pages/public/Auth/Auth/Register';
import UpdateProfile from './pages/private/User/Profile/UserViews/UpdateProfile';
import UserProfile from './pages/private/User/Profile/UserViews/UserProfile';
import Dogs from './pages/private/Dogs/Dogs';
import Dog from './pages/private/Dogs/Dog';
import Handlers from './pages/private/Handlers';
import Handler from './pages/private/Handler';
import Clubs from './pages/private/Clubs/Clubs';
import Club from './pages/private/Clubs/Club';
import Home from './pages/public/Home';
import Unauthorized from './pages/public/Unauthorized';
import NotFound from './pages/public/NotFound';
import RequireAuth from './components/RequireAuth';




function App() {
  return (

  
  
    <Routes>
     <Route path = '/' element = {<Layout />} >
      
        <Route path = '/' element = {<Home />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/unauthorized' element = {<Unauthorized />} />
        <Route path = '/404NotFound' element = {<NotFound />} />
      
      <Route element = {<RequireAuth allowedRoles={"handler"}/> } >
        <Route path = '/user:id' element = {<UserProfile />} />
        <Route path = '/user/updateprofile/:id' element = {<UpdateProfile />} />

        <Route path = '/dogs' element = {<Dogs  />} />
        <Route path = '/dogs:id' element = {<Dog/> } />

        <Route path = '/handlers' element = {<Handlers  />} />
        <Route path = '/handlers/:id' element = {<Handler/> } />

        <Route path = '/clubs' element = {<Clubs  />} />
        <Route path = '/clubs/:id' element = {<Club/> } />
      </Route>
      </Route>
        

     
    </Routes>
    
   
  )
}

export default App;
