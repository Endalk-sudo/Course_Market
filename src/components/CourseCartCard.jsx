import React from 'react'
import "./CourseCartCard.css"

const CourseCartCard = () => {
    return (
        <div className='course-cart-card'>
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80" />
            <div className="cart-card-content">
                <div className='cart-card-header'>
                    <h2>The Complete React & Redux Mastery Course (2025)</h2>
                    <p>Alice Johnson</p>
                </div>
                <div className='c-b-container'>
                    <p>$199.99</p>
                    <button className='remove-btn'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCartCard