import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Profile() {
  const userDetails = useSelector(state => state.details)
  return (
    <div className='details'>
      <div className='infoDiv'>
        <p >name</p>
        <p className='userDetail'>{userDetails.name}</p>
      </div>
      <div className='infoDiv'>
        <p >Country</p>
        <p className='userDetail'>{userDetails.country}</p>
      </div>
      <div className='infoDiv'>
        <p >Gender</p>
        <p className='userDetail'>{userDetails.gender}</p>
      </div>
      <div className='infoDiv'>
        <p >Permanent Account Number</p>
        <p className='userDetail'>{userDetails.permanentAccNum}</p>
      </div>
      <Link to='/edudetails'>Education Details</Link>
    </div>
  )
}

export default Profile