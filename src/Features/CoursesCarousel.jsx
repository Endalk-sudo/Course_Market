import React, { useEffect, useRef, useState } from 'react'
import CarouselCard from '../components/CarouselCard'
import img from "../images/person-image.png"
import "./CoursesCarousel.css"


const courses = [
  {
    id : 1,
    title: " React Mastery 2025",
    subtitle: "Build Real-World Apps",
    img 
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    subtitle: "Type-Safe JavaScript",
    img
  },
  {
    id: 3,
    title: "UI/UX Design Pro",
    subtitle: "Figma & Design Systems",
    img
  },
  {
    id: 3,
    title: "UI/UX Design Pro",
    subtitle: "Figma & Design Systems",
    img
  }

]

const CoursesCarousel = () => {
  const [currentIndex , setCurrentIndex] = useState(0);

  const totalSlides = courses.length;
  
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutref = useRef(null);

  const nextSlide = () =>{
    setCurrentIndex((prev)=> (prev + 1) % totalSlides)
  }

  const prevSlide = () =>{
    setCurrentIndex((prev)=> (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) =>{
    setCurrentIndex(index)
  }

  useEffect(()=>{
    if (!isAutoPlaying) return;

    timeoutref.current = setTimeout(()=>{
      nextSlide();
    },4000)

    return () => clearTimeout(timeoutref.current);

  },[currentIndex,isAutoPlaying])

  

  // Touch/Swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className='courses-carousel-container'
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <button className='carousel-btn left-carousel-btn' onClick={prevSlide}>←</button>

      <div 
        className='courses-carousel'
        style={{transform: `translateX(-${currentIndex * 100}%)`,transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"}}
        
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        
        >

        {courses.map((course) => (<CarouselCard
          key={course.id}
          title={course.title}
          subtitle={course.subtitle}
          img={course.img}
        />))}
      </div>

      <button className='carousel-btn right-carouselbtn' onClick={nextSlide}>→</button>
      <div className='dot-btn-container'>
        {
          courses.map((_, idx) => (
            <button key={idx} className={`dot-btn ${currentIndex === idx ? "dot-active" : ""}`} onClick={()=>goToSlide(idx)}></button>
          ))
        }
      </div>
    </section>
  )
}

export default CoursesCarousel