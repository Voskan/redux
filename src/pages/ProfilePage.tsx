import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.profile || !user.profile.uid) {
      navigate('/login');
    }
  }, [user])

  return (
    <div className='container'>
      <h1>User profile</h1>
      {
        user && user.profile && user.profile.uid ? (
          <>
            <h2>{user.profile.displayName}</h2>
            <h3>{user.profile.email}</h3>
            <h3>{user.profile.uid}</h3>
          </>
        ): null
      }
    </div>
  )
}

export default ProfilePage