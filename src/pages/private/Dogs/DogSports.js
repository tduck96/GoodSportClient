import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from 'react-bootstrap';
import styles from './DogSport.module.css';
import AddSport from '../User/Profile/UserViews/AddSport';
import { DropdownMenu } from 'react-bootstrap/esm/DropdownMenu';
import useAuth from '../../../hooks/useAuth';
import DeleteSport from '../User/Profile/UserViews/DeleteSport';


const DogSports = () => {
    const [sports, setSports] = useState([]);
    const {auth} = useAuth();

    useEffect(() => {
        getSports();
    }, []);

    const getSports = async () => { 
        try {
            const response = await axios.get(`/user/${auth.userId}/sports`);
            console.log(response.data);
            setSports(response.data)
        }
        catch(err) {
            console.error(err);
        }
    }
  return (
    <div>
      
            <div className = {styles.sportsContainer}>
              <section className = {styles.sportHeader} >
               <h3 className = {styles.subHeader}> Sports </h3>

              <AddSport getSports = {getSports} />

             </section>
        {
        sports.map(sport => (
          <ul key = {sport.id} className = {styles.sportContainer} >
            <div className = {styles.sportDetails}>
              <img src = {sport.photoUrl} alt = '' className = {styles.sportPic}></img>
              <h3> {sport.name}</h3>
            </div>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" className = {styles.dropdown}>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <DeleteSport getSports = {getSports} id = {sport.id}/>
                </Dropdown.Item>          
              </Dropdown.Menu>
           </Dropdown>
          </ul>
        ))
      }  
            
            


      </div>
      
    </div>
  )
}

export default DogSports
