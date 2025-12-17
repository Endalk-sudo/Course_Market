import React from 'react'
import "./CartPage.css"
import CourseCartCard from '../components/CourseCartCard'

const CartPage = () => {
  return (
    <section className='cart-page'>
      <h1>Shopping Cart</h1>
      <section className='cart-container'>
        <div className='course-list-container'>
          <CourseCartCard />
        </div>

        <div className='total-price-container'>

          <div className='order-summery-card'>
            <h3>Order Summery</h3>
            <div className='price-item'>
              <p className='price-label'>Subtotal</p>
              <p className='price-value'>$30.00</p>
            </div>
            <div className='price-item'>
              <p className='price-label'>Tax</p>
              <p className='price-value'>$2.50</p>
            </div>
            <hr />
            <div className='price-item'>
              <p className='total-price-label'>Total</p>
              <p className='total-price-value'>$32.50</p>
            </div>

            <button className='checkout-btn'>Checkout</button>
          </div>

        </div>
      </section>
    </section>
  )
}

export default CartPage