import React from 'react'
import '../scss/user.scss'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {user: {}}
  }

  componentDidMount() {
    fetch(`http://localhost:3001/user/getById?id=${this.props.userId}`)
      .then(res => res.json())
      .then(user => {
        this.setState({user})
      })
  }

  render() {
    const {displayName, email, name, projectName} = this.state.user
    console.log(this.state.user)
    return (
      <div className='user-modal'>
        <h2>{displayName} </h2>
        <div>
          <div className='user-info'>
            <h3>Informacje</h3>
            <div className='user-field user-field-info'>
              Obrazek:
            </div>
            <div className='user-field user-field-info'>
              <span>Nazwa użytkownika:</span>
              <span>{name}</span>
            </div>
            <div className='user-field user-field-info'>
              <span>Wyświetlana nazwa: </span>
              <span>{displayName}</span>
            </div>
            <div className='user-field user-field-info'>
              <span>Email: </span>
              <span>{email}</span>
            </div>
          </div>
          <div>
            <h3>Prefrencje</h3>
          </div>
          <div>
            <h3>Projekty</h3>
          </div>
        <button
          className='action-button'
          style={{float: 'right'}}
          onClick = {() => this.props.close()}
        >
          Zamknij
        </button>
        </div>
      </div>
    )
  }
}

export default User