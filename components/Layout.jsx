import React, {Fragment} from 'react'

import Menu from './navigation/Menu'
import SideBar from './navigation/SideBar'

export const Layout = () => 
  <Fragment className = 'layout'>
    <Menu />
    <SideBar />
  </Fragment>