import React from 'react'
 import { FaServer ,FaPaintBrush} from "react-icons/fa";
 import { MdDeveloperMode } from "react-icons/md";
 import "./CourseCategory.css"

const CourseCategory = () => {
  return (
    <section className='course-category-section'>
        <div className='course-category-container'>
            <h2>Browse by Category</h2>
            <div className='course-categorys'>
                <div className='course-category-card'>
                    <MdDeveloperMode className='category-icon' size={70}/>
                    <p>Frontend</p>
                </div>

                <div className='course-category-card'>
                    <FaServer className='category-icon' size={70}/>
                    <p>Backend</p>
                </div>
                
                <div className='course-category-card'>
                    <FaPaintBrush className='category-icon' size={70}/>
                    <p>Design</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseCategory