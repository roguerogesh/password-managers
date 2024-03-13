import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    count: 0,
  }

  onAddDetails = () => {
    const {website, username, password} = this.state

    const newList = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
      website: '',
      username: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  renderOfPasswordCard = () => {
    const {passwordList, count} = this.state
    const {website, username, password} = passwordList

    if (count !== 0) {
      return (
        <ul className="password-list-container">
          <li className="list-item">
            <div>
              <p className="font-styles">{website}</p>
              <p className="font-styles">{username}</p>
              <p className="font-styles">{password}</p>
            </div>
            <button className="delete-button" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
              />
            </button>
          </li>
        </ul>
      )
    } else {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="password-manager-img"
          />
          <p className="heading">No Passwords</p>
        </div>
      )
    }
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {website, username, password, count} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-manager-top-container">
          <form className="add-password-container" onSubmit={this.onAddDetails}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-bar"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-bar"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-bar"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="password-manager-bottom-container">
          <div className="nav-item-bar">
            <div className="your-passowrd-heading-box">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input type="search" placeholder="search" className="input-bar" />
            </div>
          </div>
          <form className="show-passowrds-box">
            <input type="checkbox" className="check-box" id="checkBox" />
            <label htmlFor="checkBox" className="heading">
              Show passwords
            </label>
          </form>

          {this.renderOfPasswordCard()}
        </div>
      </div>
    )
  }
}

export default App
