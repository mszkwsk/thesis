import React from "react"
import Link from 'next/link'

const TaskList = ({tasks, classNamePrefix}) => tasks.map(task => {
  const {id, title, description, status, project, taskNumber} = task

  return (
    <Link href={`/task?taskId=${id}`} key={id}>
      <div>
        <h4 className={`${classNamePrefix}__task-title`}>{`${taskNumber} ${title}`}</h4>
        <span className={`${classNamePrefix}__task-info`}>Projekt: {project}</span>
        <span className={`${classNamePrefix}__task-info`}>Status: {status}</span>
        <p className={`${classNamePrefix}__task-desc`}>{description}</p>
      </div>
    </Link>
  )
})

export default TaskList