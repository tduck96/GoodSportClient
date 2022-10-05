import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import Locations from '../Filters/Locations';
const Handlers = () => {
  const [handlers, setHandlers] = useState([]);

  useEffect(() => {
    getHandlers();
  }, [])

  const getHandlers = async () => {
    try {
      const response = await axios.get('/handler');
      setHandlers(response.data);
   }
    catch (err) {
      console.error(err);
    }
  }
  console.log(handlers);

  return (
    <div>
      
      {
        handlers.map(handler => (
          <Link to = {`/handlers/${handler.id}`}>
              <div key = {handler.id}>
                <h1> {handler.name} </h1>
              </div>
          </Link>
        ))
      }
      
    </div>
  )
}

export default Handlers
