import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const FollowButton = () => {
    const [status, setStatus] = useState();
    const {id} = useParams();
    const {auth} = useAuth();

    useEffect(() => {
        getStatus();
    }, []);

    const getStatus = async () => {
        try {
            const result = await axios.get(`/user/isFollowing?userId=${auth.userId}&followingId=${id}`)
            console.log(result.data);
            setStatus(result.data);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    const followHandler = async () => {
        try {
            const response = await axios.post(`/user/${auth.userId}/follow`, {
                userProfileId: auth?.userId,
                followId: id
            });

            console.log(response.data);
            console.log(response);
        }
        catch(err) {
            console.error(err);
        }
        getStatus();
    }

    const unfollowHandler = async () => {
        try {
            const response = await axios.delete(`/user/unfollow/${id}?userId=${auth?.userId}`)
            console.log(response);
        }
        catch(err) {
            console.error(err)
        }
        getStatus();
    }
  return (
    <div>
       { 
       status === true ? 
         <Button variant = "danger" onClick = {unfollowHandler}>Unfollow</Button>
       : 
         <Button variant = "primary" onClick = {followHandler}>Follow</Button>
        }
    </div>
  )
}

export default FollowButton
