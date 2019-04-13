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
  const comments = [{
    author: 'Kowalski Junior',
    comment:'Brakuje dobrze zdefiniowanych wymagań do pracy nad tą historyjką'
  }]

  return (
    <div className='task-container'>
      <span>{project} / {taskNumber}</span>
      <h2>
        <span>{title}</span>
      </h2>
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
            <h3>Informacje</h3>
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
          <h3>Osoby</h3>
          <div>Autor: {author.displayName}</div>
          <div>Przypisany: {assignedTo ?
              assignedTo.displayName : 'Nieprzypisany'}</div>
          <div>
            Obserwujący: {watchers} {' '}
            <button className='task-start-watching-button'>
              Zacznij obserwować
            </button>
          </div>
          <h3>Daty</h3>
          <div>Utworzono: {creationDate}</div>
          <div>Modyfikowano: {resolvedDate ?
            resolvedDate : modificationDate}</div>
          <h3>Zalogowany czas </h3>
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