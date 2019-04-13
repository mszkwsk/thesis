import React from 'react'
import {ArrowRight} from "@material-ui/icons"

const renderChanges = (history) => {
  if(history.length > 0) {
    return history.map((change, idx) => {
      const {date, changes} = change
      const [changeName, valueChange] = changes
      return (
        <div
          key={idx}
          className='task-container-history'
        >
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
  <React.Fragment>
    {renderChanges(history)}
  </React.Fragment>

export default History