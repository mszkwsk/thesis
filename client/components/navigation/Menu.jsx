import React, {useState} from 'react'
import Link from 'next/link'
import {HelpOutline, Person, Add} from '@material-ui/icons'

import IconButton from '../common/IconButton'
import Modal from '../common/Modal'
import User from '../User'
import CreateTask from '../CreateTask'
import '../../scss/menu.scss'

const Menu = () =>  {
  const [createModalOpen, openCreate] = useState(false)
  const [userModalOpen, openUser] = useState(false)

  return (
    <h1 className = 'menu'>
      <div className='menu-section'>
        <Link href='/'>
          <div className = 'menu-item'>Start</div>
        </Link>
        <div className = 'menu-item'>Twoje zakładki</div>
        <Link href='/projects'>
          <div className = 'menu-item'>Projekty</div>
        </Link>
        <button
          className = 'menu-button'
          onClick = {() => openCreate(!createModalOpen)}
        >
          Stwórz
          <Add />
        </button>
      </div>
      <div className='menu-section'>
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
        <IconButton
          className = 'menu-button-icon'
          children = {<Person />}
          onClick={() => openUser(true)}
        />
      </div>
      {userModalOpen &&
      <Modal close ={() => openUser(false)}>
        <User
          userId={'14b9e5f8-8edd-44c5-a96e-f6c9805966fb'}
          close ={() => openUser(false)}
        />
      </Modal>
      }
      {createModalOpen &&
      <Modal close= {() => openCreate(false)}>
        <CreateTask close= {() => openCreate(false)}/>
      </Modal>}
    </h1>
  )
}

export default Menu