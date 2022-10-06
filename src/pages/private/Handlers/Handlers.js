import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import Locations from '../Filters/Locations';
import styles from './Handler.module.css';
const Handlers = () => {
  const [handlers, setHandlers] = useState([]);

  useEffect(() => {
    getHandlers();
  }, [])

  const getHandlers = async () => {
    try {
      const response = await axios.get('/handler');
      console.log(response.data)
      setHandlers(response.data);
   }
    catch (err) {
      console.error(err);
    }
  }
 

  return (
    <div className = {styles.handlersContainer}>
      
      {
        handlers.map(handler => (
          <ul key = {handler.id} className = {styles.handlerLists}>
            <Link to = {`/handlers/${handler.id}`} className = {styles.navLink}>
                <div key = {handler.id}>
                <h3> {handler.name} </h3>
                <p> {handler.location}</p>
                </div>
            </Link>
          </ul>
        ))
      }
      
    </div>
  )
}

export default Handlers
