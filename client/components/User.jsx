import React from 'react'
import '../scss/user.scss'
import Dropdown from "./common/Dropdown";
import {Button} from "./common/Button";

const communiaction = []

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
            <div className='user-field user-field-settings'>
              Typ komunikacji: <Dropdown list={communiaction}/>
            </div>
            <div className='user-field user-field-settings'>
              Język
            </div>
            <div className='user-field user-field-settings'>
              Strefa czasowa <Dropdown list={[]}/>
            </div>
            <div className='user-field user-field-settings'>
              Skróty klawiszowe
            </div>
            <div className='user-field user-field-settings'>
              Powiadom o moich zmianach
            </div>
          </div>
          <div className='user-projects'>
            <h3>Projekty</h3>
            Lista projektów:
            {projectName &&
              projectName.map(v =>
                <div>{v}</div>)
            }
          </div>
          <Button
            onClick={this.props.close}
            style={{float: 'right'}}
            label='Zamknij'
          />
        </div>
      </div>
    )
  }
}

export default User