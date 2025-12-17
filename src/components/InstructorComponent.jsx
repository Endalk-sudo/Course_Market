import React from 'react'
import { useParams } from 'react-router-dom';
import Data from "../data"
import "./InstructorComponent.css"


const InstructorComponent = () => {
    const { id } = useParams()
    const courseData = Data.find((c) => c.id === +id)

    console.log(courseData.instructor)

    const instructor = {
        name: "Alice Johnson",
        title: "Senior Full-Stack Developer",
        bio: "With over 10 years of experience in web development, Alice has helped thousands of developers master modern technologies. She specializes in React, Node.js, and scalable architectures.",
        avatar: "../images/person-image.png",
        rating: 4.8,
        reviews: 12450,
        students: 155000,
        courses: 8,
        expertise: ["React", "Node.js", "UI/UX", "JavaScript"],
        social: {
            twitter: "@alicejohnson",
            linkedin: "https://linkedin.com/in/alicejohnson"
        }
    };

    return (
        <div className='cd-content'>
            <div className='instructor-header'>
                <img src={courseData.instructor?.avatar} alt={instructor.name} className='instructor-avatar' />
                <div>
                    <h2 className='cd-heading-two'>{courseData.instructor.name}</h2>
                    <h3 className='cd-heading-three'>{courseData.instructor.title}</h3>
                </div>
            </div>
            <div className='instructor-stats'>
                <div className='stat-item'>
                    <span className='stat-value'>{courseData.instructor.rating}</span>
                    <span className='stat-label'>Rating</span>
                </div>
                <div className='stat-item'>
                    <span className='stat-value'>{courseData.instructor.reviews}</span>
                    <span className='stat-label'>reviews</span>
                </div>
            </div>
        </div>
    )
}

export default InstructorComponent