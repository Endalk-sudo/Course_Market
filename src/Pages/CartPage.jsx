import React from 'react'
import Data from "../data"
import CourseCartCard from '../components/CourseCartCard'
import "./CartPage.css"

const CartPage = ({ cartList, handleRemove }) => {

  const cartData = cartList.map((c) => Data.find((cd) => cd.id === c))

  const calcTotal = cartData.reduce((acc, cur) => (acc + cur.price), 0)


  console.log("Total", calcTotal)

  return (
    <section className='cart-page'>
      <h1>Shopping Cart</h1>
      <section className='cart-container'>
        <div className='course-list-container'>
          {
            cartList.length !== 0 ? (
              cartData.map((cData) => (<CourseCartCard
                key={cData.id}
                id={cData.id}
                title={cData.title}
                name={cData.instructor.name}
                price={cData.price}
                img={cData.image}
                handleRemove={handleRemove}

              />))
            ) : (
              <p style={{ textAlign: "center", fontSize: "1.4rem", color: "gray" }}>There is no Course added </p>
            )


          }
        </div>

        <div className='total-price-container'>

          <div className='order-summery-card'>
            <h3>Order Summery</h3>
            <div className='price-item'>
              <p className='price-label'>Subtotal</p>
              <p className='price-value'>${Math.floor(calcTotal * 100) / 100}</p>
            </div>
            <div className='price-item'>
              <p className='price-label'>Tax</p>
              <p className='price-value'>$0</p>
            </div>
            <hr />
            <div className='price-item'>
              <p className='total-price-label'>Total</p>
              <p className='total-price-value'>${Math.floor(calcTotal * 100) / 100}</p>
            </div>

            <button className='checkout-btn'>Checkout</button>
          </div>

        </div>
      </section>
    </section>
  )
}

export default CartPage