import React, {useState} from 'react'

const Tabs = ({children}) => {
  const [tabNumber, switchTabNumber] = useState(0)
  const selectedClassName = 'task-tab-header task-tab-header--selected'

  return (
    <React.Fragment>
      <div className='task-tab'>
        <h4
          className={`${!tabNumber ?
            selectedClassName : 'task-tab-header'}`}
          onClick={() => switchTabNumber(0)}
        >
          Komentarze
        </h4>
        <h4
          className={`${tabNumber ?
            selectedClassName: 'task-tab-header'}`}
          onClick={() => switchTabNumber(1)}
        >
          Historia
        </h4>
      </div>
      {children [tabNumber]}
    </React.Fragment>
  )
}

export default Tabs
