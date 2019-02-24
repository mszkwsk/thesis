import React from 'react'

import '../../css/sideBar.css'

const SideBar = (props) => 
  <div className = 'side-bar'>
    {props.children}
  </div>

export default SideBar