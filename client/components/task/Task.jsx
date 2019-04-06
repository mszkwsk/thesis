import React from 'react'
import '../../scss/task.scss'
import History from './History'
import Comments from './Comments'
import Tabs from './Tabs'

const Task = ({task, author, assignedTo}) => {
  const {
    taskNumber,
    title,
    status,
    issueType,
    estimation,
    creationDate,
    modificationDate,
    resolvedDate,
    description,
    sprint,
    dependcies,
    workLog = 0,
    history,
    project
  } = task
  const priority = 'Ważne'
  const watchers = 2
  const comments = [{author: '', comment:''}]

  return (
    <div className='task-container'>
      <span>{project} / {taskNumber}</span>
      <h4>
        <span>{title}</span>
      </h4>
      <div className='task-container-actions'>
        <button className='task-action-button'>Edytuj</button>
        <button className='task-action-button'>Komentuj</button>
        <button className='task-action-button'>Przypisz</button>
        <button className='task-action-button'>Otwórz</button>
        <button className='task-action-button'>W trakcie</button>
      </div>
      <div className='task-container-details'>
        <div>
          <div className='task-container-info'>
            <h4>Informacje</h4>
            <div>Typ encji: {issueType}</div>
            <div>Priorytet: {priority}</div>
            <div>Status: {status}</div>
            {sprint && <div>Sprint: {sprint}</div>}
            {estimation && <div>Estymacja: {estimation}</div>}
          </div>
          <div className='task-container-desc'>
            <h4> Opis </h4>
            <section>
              {description}
            </section>
          </div>
        </div>
        <div className='task-container-info task-container-info--additonal'>
          <h4>Osoby</h4>
          <div>Autor: {author.displayName}</div>
          <div>Przypisany: {assignedTo ?
              assignedTo.displayName : 'Nieprzypisany'}</div>
          <div>
            Obserwujący: {watchers} {' '}
            <button className='task-start-watching-button'>
              Zacznij obserwować
            </button>
          </div>
          <h4>Daty</h4>
          <div>Utworzono: {creationDate}</div>
          <div>Modyfikowano: {resolvedDate ?
            resolvedDate : modificationDate}</div>
          <h4>Zalogowany czas </h4>
          <div>Przepracowno: {workLog} </div>
        </div>
      </div>
      {dependcies && <div>{dependcies}</div>}
      <Tabs>
        <Comments comments={comments} />
        <History history={history} />
      </Tabs>
    </div>
  )
}

export default Task