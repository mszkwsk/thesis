import React, {useState} from 'react'
import Modal from '../Modal'
import '../../css/menu.css'

const Menu = () =>  {
  const [createModalOpen, open] = useState(false)

  return (
    <h1 className = 'menu'>
      <div className = 'menu-item'>Start</div>
      <div className = 'menu-item'>Twoje zakładki</div>
      <div className = 'menu-item'>Projekty</div>
      <button 
        className = 'menu-button'
        onClick = {() => open(!createModalOpen)}
      >
        Stwórz
      </button>
      <input 
        className = 'menu-search' 
        type = 'search'
        placeholder = 'Wyszukaj...'
      />
      <button 
        className = 'menu-button'
        onClick = {() => console.log('klik klik!')}
      >
        Pomoc
      </button>
      <button 
        className = 'menu-button'
        onClick = {() => console.log('klik klik!')}
      >
        Ustawienia
      </button>
      <button 
        className = 'menu-button'
        onClick = {() => console.log('klik klik!')}
      >
        Konto
      </button>
      {createModalOpen && 
        <Modal
          handleClose = {() => open(!createModalOpen)}
        />} 
    </h1>
  )
}

export default Menu