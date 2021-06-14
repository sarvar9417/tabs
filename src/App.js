import React, { useEffect, useState } from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa'

const URL = "https://course-api.com/react-tabs-project"

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs]  = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () =>{
    const response = await fetch(URL)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchJobs()
  }, [])

  if(loading){
    return <section className="section-loading"><h1>Loading ...</h1></section>
  }
  const {title, company, dates, duties} = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>Expriences</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index)=>{
            return <button className={`job-btn ${index===value && 'active-btn'}`} key={job.id} onClick={()=>{setValue(index)}}>{job.company}</button>
          })}
        </div>
        <article className="jobs-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index)=>{
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="jobs-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App;
