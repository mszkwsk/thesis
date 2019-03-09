import React, {Fragment} from 'react'
import Dropdown from '../components/common/Dropdown'
import '../css/modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: ['Donut', 'Doit', 'Placki', 'Smieszne'],
      issueType: ['Historyjka', 'Błąd', 'Zadanie', 'Defekt'],
      users: ['Ja', 'On', 'Oni']
    }
  }

  renderMandatory() {
    return <span style={{color: 'red'}}>*</span>
  }

  render() {
    const {handleClose: close} = this.props
    const {issueType, projects, users} = this.state

    return (
      <Fragment>
        <div
          className='modal-dim'
          onClick={() => close()}
        />
        <div className = 'modal-dialog'>
          <h2 className = 'modal-dialog-header'>Stwórz encję</h2>
          <h3>
            Tytuł {this.renderMandatory()}
          </h3>
          <input type ='text' />
          <h3>
            Projekty {this.renderMandatory()}
          </h3>  
          <Dropdown children = {projects}/>
          <h3>
            Typ encji {this.renderMandatory()}
          </h3>
          <Dropdown children = {issueType}/>
          <h3>Stan zadania</h3>
          <Dropdown children = {['otwarte', 'zamkniete', 'code reivew', 'w trakcie']}/>
          <h3>Przypisany</h3>
          <Dropdown children = {users}/>
          <h3 className = 'modal-dialog-descprition-header'>Opis</h3>
          <textarea 
            rows = {5}
            cols = {45}
          />
          <h3> Estymacja </h3>
          <input type ='text' />
          <button
            style={{display: 'block'}}
            onClick={() => console.log('cyk, zapisane!')}
          > 
            Zapisz 
          </button>
        </div>
      </Fragment>
    )
  }
}

export default Modal