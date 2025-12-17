import React from 'react'
import Data from "../data"
import { useParams } from 'react-router-dom'
import "./SyllabusComponent.css"

const SyllabusComponent = () => {

    const { id } = useParams()

    const courseData = Data.find((c) => c.id === +id)

    return (
        <div className='cd-content'>
            <h2 className='cd-heading-two'>Curriculum</h2>
            {
                courseData.curriculum.map((cur, idx) => (
                    <div key={idx}>
                        <h3 className='cd-heading-three'>{cur.title}</h3>
                        <p className='cd-duration'>{cur.duration}</p>
                        <ul>
                            {
                                cur.lessons.map((lesson, index) => (<li key={index}>{lesson}</li>))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default SyllabusComponent