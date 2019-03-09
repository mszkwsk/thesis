import React, {Fragment} from 'react'

import Menu from './navigation/Menu'
import SideBar from './navigation/SideBar'

export const Layout = (props) => 
  <Fragment>
    <Menu />
    <SideBar />
    <div>
      {props.children}
    </div>
  </Fragment>