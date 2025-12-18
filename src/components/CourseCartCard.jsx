import React from 'react'
import "./CourseCartCard.css"

const CourseCartCard = ({ id, price, name, title, handleRemove, img }) => {
    return (
        <div className='course-cart-card' >
            <img src={img} />
            <div className="cart-card-content">
                <div className='cart-card-header'>
                    <h2>{title}</h2>
                    <p>{name}</p>
                </div>
                <div className='c-b-container'>
                    <p>${price}</p>
                    <button className='remove-btn' onClick={() => handleRemove(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCartCard