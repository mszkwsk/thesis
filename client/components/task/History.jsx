import React from 'react'
import {ArrowRight} from "@material-ui/icons"

const renderChanges = (history) => {
  if(history.length > 0) {
    return history.map(change => {
      const {date, changes} = change
      const [changeName, valueChange] = changes
      return (
        <div>
          <h5>Data: {date} </h5>
          <div>{changeName}</div>
          <div className='task-container-history-change'>
            {valueChange.from} <ArrowRight/> {valueChange.to}
          </div>
        </div>
      )
    })
  } else return null
}

const History = ({history}) =>
  <div className='task-container-history'>
    {renderChanges(history)}
  </div>

export default History