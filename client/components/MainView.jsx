import React from 'react'
import Link from 'next/link'

import '../css/mainView.css'

const renderTasks = (latestTasks) => latestTasks.map(element => {
  const {id, title, description, status, project, taskNumber} = element

  return (
    <Link href={`/task?taskId=${id}`}>
      <section key={id}>
        <h4 className='main-view__task-title'>{`${taskNumber} ${title}`}</h4> 
        <span className='main-view__task-info'>Projekt: {project}</span>
        <span className='main-view__task-info'>Status: {status}</span>
        <article className='main-view__task-desc'>{description}</article>
      </section>
    </Link>
    )
})

const MainView = ({latestTasks}) =>
  <div className='main-view'> 
    <div className='main-view-task-container'>
      {renderTasks(latestTasks)}
    </div>
  </div>

export default MainView