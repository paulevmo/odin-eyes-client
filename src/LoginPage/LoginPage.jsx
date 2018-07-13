import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './login.scss'

import { userActions } from '../_actions'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.dispatch(userActions.logout())

    this.state = {
      username: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showLogin = this.showLogin.bind(this)
    this.showSignup = this.showSignup.bind(this)
    this.showForgotPassword = this.showForgotPassword.bind(this)
    this.showSubscribe = this.showSubscribe.bind(this)
    this.showContactUs = this.showContactUs.bind(this)
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

  showLogin () {
    console.log('showLogin. this: ', this)
    this.prism.style.transform = 'translateZ(-100px)'
  }

  showSignup () {
    console.log('showSignup')
    this.prism.style.transform = 'translateZ(-100px) rotateY( -90deg)'
  }

  showForgotPassword () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -180deg)'
  }

  showSubscribe () {
    console.log('showSubscribe')
    this.prism.style.transform = 'translateZ(-100px) rotateX( -90deg)'
  }

  showContactUs () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( 90deg)'
  }

  showThankYou (){
    this.prism.style.transform = 'translateZ(-100px) rotateX( 90deg)';
  }

  render() {
    const { loggingIn } = this.props
    const { username, password, submitted } = this.state
    return (
      <div className='col-md-6 col-md-offset-3'>
        <div>
          <ul className='nav'>
            <li onClick={this.showLogin}>Login</li>
            <li onClick={this.showSignup}>Sign up</li>
            <li onClick={this.showForgotPassword}>Forgot password</li>
            <li onClick={this.showSubscribe}>Subscribe</li>
            <li onClick={this.showContactUs}>Contact us</li>
          </ul>
        </div>
        <div className='wrapper'>
          <div className='rec-prism'>
            <div className='face face-top'>
              <div className='content'>
                <h2>Subscribe</h2>
                <small>Enter your email so we can send you the latest updates!</small>
                <p>
                  Placeholder for email form
                </p>
              </div>
            </div>
            <div className='face face-front'>
              <div className='content'>
                <h2>Sign in</h2>
                <p>
                  Placeholder for Sign in form
                </p>
              </div>
            </div>
            <div className='face face-back'>
              <div className='content'>
                <h2>Forgot your password?</h2>
                <small>Enter your email so we can send you a reset link for your password</small>
                <p>
                  Placeholder for forgot password reset form
                </p>
              </div>
            </div>
            <div className='face face-right'>
              <div className='content'>
                <h2>Sign up</h2>
                <p>
                  Placeholder for Sign up form
                </p>
              </div>
            </div>
            <div className='face face-left'>
              <div className='content'>
                <h2>Contact us</h2>
                <p>
                  Placeholder for contact us form
                </p>
              </div>
            </div>
            <div className='face face-bottom'>
              <div className='content'>
                <div className='thank-you-msg'>
                  Thank you!
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className='test-class'>Login</h2>
        <form name='form' onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' name='username' value={username} onChange={this.handleChange} />
            {submitted && !username &&
              <div className='help-block'>Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' name='password' value={password} onChange={this.handleChange} />
            {submitted && !password &&
              <div className='help-block'>Password is required</div>
            }
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>Login</button>
            {loggingIn &&
              <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
            }
            <Link to='/register' className='btn btn-link'>Register</Link>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  return {
    loggingIn
  }
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage)
export { connectedLoginPage as LoginPage }
