import React, {Fragment} from 'react'
import Dropdown from '../components/common/Dropdown'
import '../scss/modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: ['Donut', 'Doit', 'Placki', 'Smieszne'],
      issueType: ['Historyjka', 'Błąd', 'Zadanie', 'Defekt'],
      users: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/users`)
      .then(data => data.json())
      .then(users => {
        const list = users.map(user => user.displayName)
        this.setState({users: list})
      })
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
          <div className='modal-dialog-field modal-dialog-field--inline'>
            <h5>
              Projekty {this.renderMandatory()}
            </h5>
            <Dropdown children = {projects}/>
          </div>
          <div className='modal-dialog-field modal-dialog-field--inline'>
            <h5>
              Typ encji {this.renderMandatory()}
            </h5>
            <Dropdown children = {issueType}/>
          </div>
          <div className='modal-dialog-field modal-dialog-field--inline'>
            <h5>
              Tytuł {this.renderMandatory()}
            </h5>
            <input type ='text' />
          </div>
          <div className='modal-dialog-field modal-dialog-field--inline'>
            <h5>Priorytet</h5>
            <Dropdown children = {['otwarte', 'zamkniete', 'code reivew', 'w trakcie']}/>
          </div>
          <div className='modal-dialog-field modal-dialog-field--inline'>
            <h5>Przypisany</h5>
            <Dropdown children = {users}/>
          </div>
          <div className='modal-dialog-field'>
            <h5>Opis</h5>
            <textarea
              rows = {5}
              cols = {45}
            />
          </div>
          <div className='modal-dialog-field modal-dialog-field--inline'>
            <h5> Estymacja </h5>
            <input type ='text' />
          </div>
          <div>
            <input type='checkbox' /> Utwórz kolejne
            <button
              style={{display: 'block'}}
              onClick={() => console.log('cyk, zapisane!')}
            >
              Zapisz
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Modal