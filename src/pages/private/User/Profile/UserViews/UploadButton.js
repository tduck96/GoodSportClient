import {useEffect, useState} from 'react'
import { Button, Spinner } from 'react-bootstrap';



const UploadButton = ({photoSubmit}) => {
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
        photoSubmit().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
  setLoading(true)
 
  };
  return (
      <>
      <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Uploading…' : 'Upload'}
    </Button>
   
    </>
  )
}

export default UploadButton
