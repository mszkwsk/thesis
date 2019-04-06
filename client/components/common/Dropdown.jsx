import React, {useState, Fragment} from 'react'

const renderChildren = (children, changePlaceholder, close) =>
  children.map(value => 
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
  const {children} = props
  const [placeholder, select] = useState('Proszę wybrać')
  const [isOpen, open] = useState(false)

  return (
    <Fragment>
      <div className="dropdown">
        <div 
          className="dropbtn"
          onClick = {() => open(!isOpen)}
        >
          {placeholder}
        </div>
        {isOpen && 
          <div className="dropdown-content">
            {renderChildren(children, select, open)}
          </div>}
      </div>
    </Fragment>
  )
}

export default Dropdown