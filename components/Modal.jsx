import React from 'react'
import '../css/modal.css'

class Modal extends React.Component {
  render() {
    const {handleClose: close} = this.props
    return (
      <div
        className='modal-dim'
        onClick={() => close()}
      >
        <div className = 'modal-dialog'>
        
        </div>
      </div>
    )
  }
}

export default Modal