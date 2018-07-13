import React from 'react'
import './entry.scss'

import { userActions } from '../_actions'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showSignup = this.showSignup.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state
    const { dispatch } = this.props
    if (username && password) {
      dispatch(userActions.login(username, password))
    }
  }

  showSignup () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -90deg)'
  }

  render() {
    const { loggingIn } = this.props
    const {
      username,
      password,
      submitted
    } = this.state

    return (
      <div className='content'>
        <h2>Login</h2>
        <form name='form' onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' name='username' value={username} onChange={this.handleChange} />
            { submitted && !username ? <div className='help-block'>Username is required</div> : null }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' name='password' value={password} onChange={this.handleChange} />
            { submitted && !password  ? <div className='help-block'>Password is required</div> : null }
          </div>
          <div className='form-group text-center'>
            <button className='btn btn-info'>Login</button>
            { loggingIn ? <img src='src/_assets/gifs/loading.gif' /> : null }
            <div className='btn btn-default' onClick={this.showSignup}>Sign Up &rarr;</div>
          </div>
        </form>
      </div>
    )
  }
}

export { LoginForm }
