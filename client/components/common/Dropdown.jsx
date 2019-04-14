import React, {useState, Fragment} from 'react'
import {ArrowDropDown} from '@material-ui/icons'
const renderChildren = (list, changePlaceholder, close) =>
    list.map(value =>
    <span 
      onClick = {(e) => {
        console.log(e)
        changePlaceholder(value)
        close(false)
      }}
      key = {value}
    > 
      {value}
    </span>)

const Dropdown = (props) => {
  const {list} = props
  const [placeholder, select] = useState('Proszę wybrać')
  const [isOpen, open] = useState(false)

  return (
    <Fragment>
      <div className="dropdown">
        <div 
          className="dropbtn"
          onClick = {() => open(!isOpen)}
        >
          {placeholder} <ArrowDropDown style={{fontSize: 14}}/>
        </div>
        {isOpen && 
          <div className="dropdown-content">
            {renderChildren(list, select, open)}
          </div>}
      </div>
    </Fragment>
  )
}

export default Dropdown