import React from 'react'

export const Button = (props) =>
  <button
    className='action-button'
    onClick = {() => props.onClick()}
    {...props}
  >
    {props.label}
  </button>