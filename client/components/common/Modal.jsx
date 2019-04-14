import React from "react";
import '../../scss/dim.scss'
import {Portal} from './Portal'
import {Dim} from './Dim'

const Modal = ({children, close}) =>
  <Portal>
    <Dim close={close} />
    {children}
  </Portal>

export default Modal