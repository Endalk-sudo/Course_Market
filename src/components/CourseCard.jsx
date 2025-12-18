import React from 'react'
import { Link } from "react-router-dom";
import "./CourseCard.css"
import Rating from '../components/Rating';

const CourseCard = ({ id, title, img, instructor, rating, price, handleAddToCart }) => {

  return (
    // <Link className='course-card-Link' to={`/course-detail/${id}`}>
    <div className='course-card'>
      <div className='img-layer'>
        <img src={img} alt="" />
      </div>
      <div className="course-content-container">
        <div className="course-content">
          <h3 className='course-title'>{title}</h3>
          <p className='course-instructor'>{instructor.name}</p>
          <span>
            <Rating rating={rating} size={18} />
            {` (${rating})`}
          </span>
          <p className='course-price'>${price}</p>
        </div>
        <button className='course-card-btn' onClick={() => handleAddToCart(id)}>Add to Cart</button>
      </div>
    </div>
    // </Link>
  )
}

export default CourseCard