import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import "./CourseDetailContentLayout.css"

const CourseDetailContentLayout = () => {
    return (
        <div className='cd-contents'>
            <div className='cd-content-links'>
                <NavLink to="" end >Overview</NavLink>
                <NavLink to="syllabus" >Syllabus</NavLink>
                <NavLink to="instructor" >Instructor</NavLink>
            </div>

            <Outlet />
        </div>
    )
}

export default CourseDetailContentLayout