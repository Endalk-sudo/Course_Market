import React, { useEffect, useRef, useState } from 'react';
import PopularCourseCard from '../components/PopularCourseCard';
import { Link } from 'react-router-dom';
import "./PopularCoursesCarousel.css"


const PopularCoursesCarousel = ({ coursesData, CarouselTitle = "Popular Courses" }) => {

  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function handleScroll(direction) {
    const { current } = carouselRef;
    if (!current) return;

    const scrollAmount = 320

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

  }

  function checkScrollPosition() {
    const { current } = carouselRef;
    if (!current) return;

    setCanScrollLeft(current.scrollLeft > 0);

    setCanScrollRight(
      current.scrollLeft < current.scrollWidth - current.clientWidth
    )

  }

  useEffect(() => {
    const { current } = carouselRef;
    if (!current) return;

    checkScrollPosition()

    current.addEventListener("scroll", checkScrollPosition);

    return () => {
      current.removeEventListener("scroll", checkScrollPosition);
    };

  }, [coursesData])

  return (
    <section className='pc-carousel-section'>
      <div className='pc-carousel-contents'>
        <h2 className='pc-carousel-lable'>{CarouselTitle}</h2>
        <Link className='pc-carousel-link' to="/shop">View all</Link>
      </div>
      <div className='pc-carousel-wrapper'>
        <div className='pc-carousel-track' ref={carouselRef}>
          {
            coursesData
              .map((course) => (
                <PopularCourseCard
                  key={course.id}
                  title={course.title}
                  instructor={course.instructor.name}
                  rating={course.rating}
                  price={course.price}
                  imgUrl={course.image} />
              ))
          }

        </div>
        <button
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft} className='pc-carousel-btn pc-carousel-left-btn '
        >&#10094;</button>
        <button
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
          className='pc-carousel-btn pc-carousel-right-btn'
        >&#10095;</button>
      </div>
    </section>
  )
}

export default PopularCoursesCarousel