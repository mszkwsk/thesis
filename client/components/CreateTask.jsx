import React from 'react'
import Dropdown from '../components/common/Dropdown'
import '../scss/modal.scss'

class CreateTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: ['Donut', 'Doit', 'Placki', 'Smieszne'],
      issueType: ['Historyjka', 'Błąd', 'Zadanie', 'Defekt'],
      users: [],
      preventFromClosing: false
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
    const {close} = this.props
    const {issueType, projects, users} = this.state

    return (
      <div className = 'modal-dialog'>
        <h2 className = 'modal-dialog-header'>Stwórz encję</h2>
        <div className='modal-dialog-field modal-dialog-field--inline'>
          <h3>
            Projekty {this.renderMandatory()}
          </h3>
          <Dropdown children = {projects}/>
        </div>
        <div className='modal-dialog-field modal-dialog-field--inline'>
          <h3>
            Typ encji {this.renderMandatory()}
          </h3>
          <Dropdown children = {issueType}/>
        </div>
        <div className='modal-dialog-field modal-dialog-field--inline'>
          <h3>
            Tytuł {this.renderMandatory()}
          </h3>
          <input type ='text' />
        </div>
        <div className='modal-dialog-field modal-dialog-field--inline'>
          <h3>Priorytet</h3>
          <Dropdown children = {['otwarte', 'zamkniete', 'code reivew', 'w trakcie']}/>
        </div>
        <div className='modal-dialog-field modal-dialog-field--inline'>
          <h3>Przypisany</h3>
          <Dropdown children = {users}/>
        </div>
        <div className='modal-dialog-field'>
          <h3>Opis</h3>
          <textarea
            rows = {5}
            cols = {45}
          />
        </div>
        <div className='modal-dialog-field modal-dialog-field--inline'>
          <h3> Estymacja </h3>
          <input type ='text' />
        </div>
        <div className='modal-dialog-operations'>
          <div>
            <input
              type='checkbox'
              onClick={()=> this.setState({preventFromClosing: true})}
            />
            Utwórz kolejne
          </div>
          <div className='modal-dialog-operations-buttons'>
            <button
              className='action-button'
              onClick={() =>
                !this.state.preventFromClosing && close()}
            >
              Zapisz
            </button>
            <button
              className='action-button'
              onClick={() => close()}
            >
              Anuluj
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateTask