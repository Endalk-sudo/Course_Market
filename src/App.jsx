import React from 'react'
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


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />

          <Route path="/course-detail/:id" element={<CourseDetailPage />} >
            <Route element={<CourseDetailContentLayout />}>
              <Route index element={<OverviewComponent />} />
              <Route path='syllabus' element={<SyllabusComponent />} />
              <Route path='instructor' element={<InstructorComponent />} />
            </Route>
          </Route>

          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App