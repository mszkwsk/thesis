import React, {Fragment} from 'react'
import Menu from './navigation/Menu'

export const Layout = ({children}) =>
  <Fragment>
    <Menu />
    <div>
      {children}
    </div>
  </Fragment>