import React, {useState} from 'react'
import {ChevronRight, ChevronLeft} from '@material-ui/icons'

import IconButton from '../common/IconButton'
import '../../scss/sideBar.scss'

const renderChevron = isToggled =>
  isToggled ? <ChevronLeft /> : <ChevronRight/>

const hideSideBar = isToggled =>
  isToggled ? 
  ['side-bar', 'switch-side-bar'] :
  ['side-bar--inactive', 'switch-side-bar--toggle']

const SideBar = (props) => { 
  const [isToggled, toggle] = useState(true)
  const classNames = hideSideBar(isToggled)
  return (
    <div className = {classNames[0]}>
      {props.children}
      <IconButton
        className = {classNames[1]}
        onClick = {() => {toggle(!isToggled)}}
        children = {renderChevron(isToggled)}
      />  
    </div>
  )
}

export default SideBar