import './WorkCard.css'

import React from 'react'
import WorkCard from './WorkCard'
import workData from './workData'

const work = () => {
  return (
    <div className="work_container">
         <h1 className="project-heading">Projects</h1>
         <div className="project-container">
           {workData.map((value, ind) => {
             return (
                <WorkCard
                   key={ind}
                   imgsrc={value.imgsrc}
                   title={value.Title}
                   text={value.text}
                   view={value.view}
                />
             )
           })}
        </div>
    </div>
  )
}

export default work
