import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCertificate } from '../Store/DetailsSlice'
function EduDetails() {
    const [addCertifi, setAddCertifi] = useState()
    const educationData = useSelector(state => state.details)
    const dispatch = useDispatch()
    const handleCertificates = () => {
        console.log(dispatch(addCertificate(addCertifi)))

    }
    return (
        <div className='eduDetails'>
            <div className="study">
                <h1>10th Std</h1>
                <div className='infoDiv'>
                    <p >Institute Name</p>
                    <p className='userDetail'>{educationData.schoolName}</p>
                </div>
                <div className='infoDiv'>
                    <p >CGPA</p>
                    <p className='userDetail'>{educationData.schoolCgpa}</p>
                </div>

            </div>
            <div className="study">
                <h1>Higher Secondary</h1>
                <div className='infoDiv'>
                    <p >Institute Name</p>
                    <p className='userDetail'>{educationData.hSecondaryName}</p>
                </div>
                <div className='infoDiv'>
                    <p >CGPA</p>
                    <p className='userDetail'>{educationData.hSecondaryCgpa}</p>
                </div>

            </div>
            <div className="study">
                <h1>Graduation Std</h1>
                <div className='infoDiv'>
                    <p >Institute Name</p>
                    <p className='userDetail'>{educationData.gradname}</p>
                </div>
                <div className='infoDiv'>
                    <p >CGPA</p>
                    <p className='userDetail'>{educationData.gradCgpa}</p>
                </div>
            </div>

            <div className="certificates">
                <h1>Certificates</h1>
                <ul>
                    {
                        educationData.certificates.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))
                    }
                </ul>
                <div className="newCertificate">
                    <input type="text" placeholder='add certificate' onChange={(e) => setAddCertifi(e.target.value)} />
                    <button onClick={handleCertificates}>Add New</button>
                </div>
            </div>
        </div>
    )
}

export default EduDetails