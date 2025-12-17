import React, { useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard';
import data from "../data.js"
import { FaFilter } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import "./ShopPage.css";
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ShopPage = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [courseData] = useState(data)

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filter, setFilter] = useState({
    isFrontend: false,
    isBackend: false,
    isDesign: false,
    isFree: false,
    isPaid: true
  })
  const [maxPrice, setMaxPrice] = useState(300);
  const [priceLevel, setPriceLevel] = useState({
    isFree: false,
    isPaid: false
  })



  const filterdCourses = useMemo(() => {
    let result = [...courseData]


    if (filter.isFrontend) result = result.filter((course) => course.categories.includes("Frontend"))
    if (filter.isBackend) result = result.filter((course) => course.categories.includes("Backend"))
    if (filter.isDesign) result = result.filter((course) => course.categories.includes("Design"))

    if (priceLevel.isFree) result = result.filter((course) => course.price === 0)
    if (priceLevel.isPaid) result = result.filter((course) => course.price !== 0)


    result = result.filter((course) => course.price < maxPrice)

    if (selectedCategory === "popularity") result.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled)
    if (selectedCategory === "rating") result.sort((a, b) => b.rating - a.rating)
    if (selectedCategory === "lowest-price") result.sort((a, b) => a.price - b.price)
    if (selectedCategory === "highest-price") result.sort((a, b) => b.price - a.price)
    if (selectedCategory === "a-z") result.sort((a, b) => a.title.localeCompare(b.title))
    if (selectedCategory === "z-a") result.sort((a, b) => b.title.localeCompare(a.title))

    return result
  }, [courseData, selectedCategory, filter, maxPrice, priceLevel])





  function handleFilterOpen() {
    setIsFilterOpen((p) => !p)
  }


  return (
    <section className='shop-page-container'>
      <aside className={`sp-filter-section ${isFilterOpen ? 'filter-open' : ''}`}>
        <div className='fs-header'>
          <h2>Filter By</h2>

          <button className='filter-close-button' onClick={() => setIsFilterOpen(false)}>
            <FiX />
          </button>
        </div>

        <hr />

        <div className='filter-container'>
          <label className="category-lable" htmlFor="category">Category</label>
          <input className='category-checkbox' type="checkbox" id="category" />
          <ul className='filter-menu'>
            <li>
              <label>
                <input type="checkbox" value={filter.isFrontend} checked={filter.isFrontend} onChange={() => setFilter((p) => ({ ...p, isFrontend: !p.isFrontend }))} />
                Frontend
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value={filter.isBackend} checked={filter.isBackend} onChange={() => setFilter((p) => ({ ...p, isBackend: !p.isBackend }))} />
                Backend
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value={filter.isDesign} checked={filter.isDesign} onChange={() => setFilter((p) => ({ ...p, isDesign: !p.isDesign }))} />
                Design
              </label>
            </li>
          </ul>
        </div>

        <hr />

        <div className='filter-container'>
          <label className="category-lable" htmlFor="Price-Level">Price Level</label>
          <input className='category-checkbox' type="checkbox" id="Price-Level" />

          <ul className='filter-menu'>
            <li>
              <label>
                <input type="checkbox" value={priceLevel.isFree} checked={priceLevel.isFree} onChange={() => setPriceLevel((p) => ({ ...p, isFree: !p.isFree }))} />
                Free
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value={priceLevel.isPaid} checked={priceLevel.isPaid} onChange={() => setPriceLevel((p) => ({ ...p, isPaid: !p.isPaid }))} />
                Paid
              </label>
            </li>
          </ul>
        </div>

        <hr />

        <div className='filter-container'>
          <label className="category-lable">Price Range</label>
          <p className='max-price'>Max Price: ${maxPrice.toFixed(2)}</p>
          <input
            id='max-price'
            className='max-price'
            type="range"
            min="20"
            max="300"
            step="1"
            value={maxPrice}
            onChange={(e) => setMaxPrice(+e.target.value)}
          />
        </div>
      </aside>

      <main className='sp-main-container'>
        <div className='sort-container'>

          <button className='mobile-filter-button' onClick={handleFilterOpen}>
            <FaFilter />
            Filter
          </button>

          <label>Sort By:
            <select name="sort-option" id="sort-select" onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Highest Rated</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
              <option value="a-z">A to Z</option>
              <option value="z-a">Z to A</option>
            </select>
          </label>

        </div>
        <section className='sp-main-content'>
          {filterdCourses.length !== 0 ? (

            filterdCourses?.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                img={course.image}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                price={course.price}
              />
            ))
          ) :
            (<p style={{ margin: "0 auto", fontSize: "2rem", color: "gray", gridColumn: "span 3" }}>There is NO Course Found 🤷‍♂️</p>)
          }

        </section>
      </main>
    </section>
  )
}

export default ShopPage