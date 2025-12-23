import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import CourseDetailPage from './Pages/CourseDetailPage'
import CartPage from './Pages/CartPage'
import AppLayout from './Layout/AppLayout'
import CourseDetailContentLayout from './Layout/CourseDetailContentLayout'
import OverviewComponent from './components/OverviewComponent'
import SyllabusComponent from './components/SyllabusComponent'
import InstructorComponent from './components/InstructorComponent'
import { useToast } from './context/ToastContext'
import ToastNotification from './components/ToastNotification'


const App = () => {

  const { addToast } = useToast()

  const [cartList, setCartList] = useState(() => {

    const storedcartList = localStorage.getItem('cartItems');

    if (storedcartList) {
      return JSON.parse(storedcartList)
    } else {
      return []
    }

  });

  useEffect(() => {

    const strCartList = JSON.stringify(cartList)

    localStorage.setItem("cartItems", strCartList)

  }, [cartList])


  function handleAddToCart(id) {
    if (cartList.includes(id)) {
      addToast("Course alreay added", "error")
      return
    }
    addToast("Course added to cart", "success")
    setCartList((p) => [...p, id])
  }

  function handleRemove(id) {
    setCartList((p) => (
      p.filter((cId) => cId !== id)
    ))
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout cartList={cartList} />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage handleAddToCart={handleAddToCart} />} />

          <Route path="/course-detail/:id" element={<CourseDetailPage />} >
            <Route element={<CourseDetailContentLayout />}>
              <Route index element={<OverviewComponent />} />
              <Route path='syllabus' element={<SyllabusComponent />} />
              <Route path='instructor' element={<InstructorComponent />} />
            </Route>
          </Route>

          <Route path="/cart" element={<CartPage cartList={cartList} handleRemove={handleRemove} />} />
        </Route>
      </Routes>
      <ToastNotification />
    </BrowserRouter>
  )
}

export default App