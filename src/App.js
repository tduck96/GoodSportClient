
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Login from './pages/public/Auth/Auth/Login';
import Register from './pages/public/Auth/Auth/Register';
import UpdateProfile from './pages/private/User/Profile/UserViews/UpdateProfile';
import UserProfile from './pages/private/User/Profile/UserViews/UserProfile';
import Dog from './pages/private/Dogs/Dog';
import Handlers from './pages/private/Handlers/Handlers';
import Handler from './pages/private/Handlers/Handler';
import Clubs from './pages/private/Clubs/Clubs';
import Club from './pages/private/Clubs/Club';
import Home from './pages/public/Home';
import Unauthorized from './pages/public/Unauthorized';
import NotFound from './pages/public/NotFound';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import HandlersByLocation from './pages/private/Handlers/HandlersByLocation';
import HandlerLayout from './pages/private/Handlers/HanderLayout';
import ClubLayout from './pages/private/Clubs/ClubLayout';
import ClubsByLocation from './pages/private/Clubs/ClubsByLocation';
import ClubsBySport from './pages/private/Clubs/ClubsBySport';
import HandlersBySport from './pages/private/Handlers/HandlersBySport';
import SignUpInfo from './pages/private/User/Profile/UserViews/SignUpInfo';
import EditDog from './pages/private/Dogs/EditDog';
import CreateDog from './pages/private/Dogs/CreateDog';
import { useEffect } from 'react';
import AddProfilePicture from './pages/private/User/Profile/UserViews/AddProfilePicture';
import EditPost from './pages/private/User/Profile/UserViews/EditPost';
import DeletePost from './pages/private/User/Profile/UserViews/DeletePost';
import DeleteDog from './pages/private/Dogs/DeleteDog';
import Post from './pages/private/User/Profile/UserViews/Post';
import HomeLoggedIn from './pages/private/HomeLoggedIn';
import Connections from './pages/private/Connections/Connections';
import ConnectionsLayout from './pages/private/Connections/ConnectionsLayout';

function App() {
  return (
    <Routes>
     <Route path = '/' element = {<Layout />} >
      
        <Route path = '/' element = {<Home />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/user/updateprofile/:id' element = {<UpdateProfile />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/unauthorized' element = {<Unauthorized />} />
        <Route path = '/404NotFound' element = {<NotFound />} />
        <Route path = '/createprofile/:id' element = {<SignUpInfo />} />
      
      <Route element ={<PersistLogin />} >
        <Route element = {<RequireAuth allowedRoles={"handler"}/> } >

             <Route path = '/home' element = {<HomeLoggedIn />}></Route>
            <Route path = '/user/viewprofile' element = {<UserProfile />} />
            <Route path = '/user/updateprofile/' element = {<UpdateProfile />} />

            <Route path = '/connections' element = {<ConnectionsLayout />}>
              <Route path = '/connections/viewall' element = {<Connections />} />
            </Route>
            
            <Route path = '/user/addprofilepicture/' element = {<AddProfilePicture />} />

            <Route path = '/editpost/:id' element = {<EditPost  />} />
            <Route path = '/deletepost/:id' element = {<DeletePost />} />
            <Route path = '/post/:id' element = {<Post />} />
            
           
              <Route path = '/dog/:id' element = {<Dog/> } />
              <Route path = '/user/dog/:id' element = {<Dog />} />
              <Route path = '/dog/editdog/:id' element = {<EditDog />} />
              <Route path = '/dog/deletedog/:id' element = {<DeleteDog />} />
              <Route path = '/dog/createdog/' element = {<CreateDog />} />
            

            <Route path = '/handlers/:id' element = {<Handler/> } />
            <Route path = '/clubs/:id' element = {<Club/> } />
            <Route path = '/clubs/sports/:id' element = {<ClubsBySport /> } />
            <Route path = '/handlers/sports/:id' element = {<HandlersBySport />} />
            <Route path = '/clubs/location/:id' element = {<ClubsByLocation />} />
            <Route path = '/handlers/location/:id' element = {<HandlersByLocation />} />
            

          <Route path = '/handlers' element = {<HandlerLayout />}>
            <Route path = '/handlers' element = {<Handlers  />} />
            

           
           
          </Route>

          <Route path = '/clubs' element = {<ClubLayout />}>
            <Route path = '/clubs' element = {<Clubs  />} />
          </Route>
        </Route>
      </Route>
      </Route>
    </Routes>
    
   
  )
}

export default App;
