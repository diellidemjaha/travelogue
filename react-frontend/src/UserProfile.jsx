// src/components/UserProfile.js

import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Navbar from './NavBar';
import UserProfileActivities from './UserProfileActivities';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import ImageFullScreen from './ImageFullScreen';

const GET_USER_PROFILE = gql`
query GetUserProfile($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      profile {
        profile_pic_path
      }
    }
  }
  `;

const apiUrl = import.meta.env.VITE_API_URL;

const UserProfile = () => {
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [savedItems, setSavedItems] = useState([]);



    const { userId } = useParams();

    const loggedInUserId = localStorage.getItem('user_id');


    const { loading, error, data } = useQuery(GET_USER_PROFILE, {
        variables: { userId: userId },
    });

    useEffect(() => {
    }, [loading, error]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { user } = data || {};
    if (!user) {
        return <p>No user data found</p>;
    }

    const { name, email, profile } = user || {};
    const profilePicPath = profile?.profile_pic_path || 'No profile picture';

    const isOwnProfile = loggedInUserId === user.id;

    const openFullScreen = (imageUrl) => {
        setFullScreenImage(imageUrl);
      };

      
  const handleSaveItem = (itemId) => {
    const yourAccessToken = localStorage.getItem('token');
  
    saveItem({
      variables: {
        itemId
      },
      context: {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      },
    });
    setSavedItems((prevItems) => [...prevItems, itemId]);
  };

    return (
        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                src={`${apiUrl}/${profilePicPath}`}
                                style={{ width: 'auto', height: '100%', maxHeight: '200px', borderRadius: '50%' }}
                                alt="Profile"
                                onClick={() => openFullScreen(`${apiUrl}${item.image_path}`)}
                            />
                        </div>
                        <h2 className="text-center mt-3">User Profile</h2>
                        {isOwnProfile && (
                            <a href='/profileupdate'>
                                <div className='btn btn-danger'>Update profile</div>
                            </a>
                        )}
                        <div className="mt-3">
                            <p className="mb-1">Name: {name}</p>
                            <p className="mb-1">Email: {email}</p>
                        </div>
                    </div>
                </div>
                {fullScreenImage && <ImageFullScreen imageUrl={fullScreenImage} onClose={() => setFullScreenImage(null)} />}
                <UserProfileActivities userId={user.id} />
            </div>
        </>
    );
};

export default UserProfile;
