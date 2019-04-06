import React from 'react'
import TaskList from './TasksList'
import '../scss/mainView.scss'

const MainView = ({latestTasks}) =>
  <div className='main-view'> 
    <h3 className='main-view-header'>Ostatnio utworzone:</h3>
    <div className='main-view-task-container'>
      <TaskList
        tasks={latestTasks}
        classNamePrefix='main-view'
      />
    </div>
  </div>

export default MainView