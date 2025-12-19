import React from 'react'
import "./HomePage.css"
import CoursesCarousel from '../Features/CoursesCarousel'
import CourseCategory from '../components/CourseCategory'
import Data from "../data"
import PopularCoursesCarousel from '../Features/PopularCoursesCarousel'


const HomePage = () => {
  const popularCoursesData = Data.filter((course) => course.studentsEnrolled > 18000);
  const beginnerCoursesData = Data.filter((course) => course.level === "Intermediate");

  return (
    <section className='home-page-container'>
      <CoursesCarousel />
      <CourseCategory />
      <PopularCoursesCarousel coursesData={popularCoursesData} CarouselTitle="Popular Courses" />
      <PopularCoursesCarousel coursesData={beginnerCoursesData} CarouselTitle="Intermediate Courses" />
    </section>
  )
}

export default HomePage