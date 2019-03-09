import React, {useState} from 'react'
import Link from 'next/link'
import {HelpOutline, Settings, Person, Add} from '@material-ui/icons'

import IconButton from '../common/IconButton'
import Modal from '../Modal'
import '../../css/menu.css'

const Menu = () =>  {
  const [createModalOpen, open] = useState(false)

  return (
    <h1 className = 'menu'>
      <Link href='/'>
        <div className = 'menu-item'>Start</div>
      </Link>
      <div className = 'menu-item'>Twoje zakładki</div>
      <Link href='/projects'>
        <div className = 'menu-item'>Projekty</div>
      </Link>
      <button 
        className = 'menu-button'
        onClick = {() => open(!createModalOpen)}
      >
        Stwórz
        <Add />
      </button>
      <input 
        className = 'menu-search' 
        type = 'search'
        placeholder = 'Wyszukaj...'
      />
      <Link href = '/help'>
        <IconButton
          className = 'menu-button-icon'
          children = {<HelpOutline />}
        />
      </Link>
      <Link href = '/settings'>
        <IconButton
          className = 'menu-button-icon'
          onClick = {() => console.log('klik klik!')}
          children = {<Settings />}
        />
      </Link>
      <Link href = '/account'>
        <IconButton
          className = 'menu-button-icon'
          onClick = {() => console.log('klik klik!')}
          children = {<Person />}
        />
      </Link>
      {createModalOpen && 
        <Modal
          handleClose = {() => open(!createModalOpen)}
        />} 
    </h1>
  )
}

export default Menu