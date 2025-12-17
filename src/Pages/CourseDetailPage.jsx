import React from 'react'
import Rating from '../components/Rating';
import data from "../data"
import { Outlet, useParams } from "react-router-dom"

import "./CourseDetailPage.css"


const CourseDetailPage = () => {
  const { id } = useParams()

  const courseData = data.find((course) => course.id === parseInt(id))

  return (
    courseData ? (
      <section className='course-detail-page'>
        <div className='cd-title-container'>
          <h1>{courseData.title}</h1>
          <p>{courseData.instructor.name}<span><Rating rating={courseData.rating} size={25} totalStars={5} /></span></p>
        </div>

        <section className='cd-content-container'>
          <div className='course-detail'>
            <div className='cd-img-layer'>
              <img src={courseData.image} alt="" />
            </div>

            <Outlet />

          </div>

          <div className='course-detail'>
            <div className='cd-card'>
              <h1 className='cd-card-price'>${courseData.price}</h1>
              <button className='cd-card-btn cd-card-btn-1'>Add to Cart</button>
              <button className='cd-card-btn cd-card-btn-2'>Buy Now</button>
              <div className='cd-card-content'>
                <ul>
                  <li>{courseData.durationHours} Hours Duration</li>
                </ul>
              </div>
            </div>
          </div>


        </section>

      </section>
    ) : (
      <p>Loading</p>
    )
  )
}

export default CourseDetailPage