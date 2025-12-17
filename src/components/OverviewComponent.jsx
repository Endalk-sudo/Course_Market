import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "../data"
import './OverviewComponent.css'

const OverviewComponent = () => {

    const { id } = useParams()

    const courseData = Data.find((c) => c.id === parseInt(id))

    return (
        <div className='cd-content'>
            <h2 className='cd-heading-two'>Description</h2>
            <p className='cd-description'>{courseData.description}</p>
            <h2 className='cd-heading-two'>Learning Outcomes</h2>
            <ul>
                {
                    courseData.whatYouWillLearn.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))
                }
            </ul>
            <h2 className='cd-heading-two'>Requirements</h2>
            <ul>
                {
                    courseData.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default OverviewComponent