import React, {Fragment} from 'react'

import Menu from './navigation/Menu'

export const Layout = (props) => 
  <Fragment>
    <Menu />
    <div>
      {props.children}
    </div>
  </Fragment>