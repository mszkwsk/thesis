import React from 'react'

const IconButton = props =>
  <div
    className = {props.className} 
    onClick={props.onClick}
  >
    {props.children}
  </div>

export default IconButton