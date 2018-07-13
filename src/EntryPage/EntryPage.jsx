import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './entry.scss'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'


import { userActions } from '../_actions'

class EntryPage extends React.Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.dispatch(userActions.logout())

    this.showForgotPassword = this.showForgotPassword.bind(this)
    this.showSubscribe = this.showSubscribe.bind(this)
    this.showContactUs = this.showContactUs.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
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
    // TODO: do this after a subscribe or contact us submit
    this.prism.style.transform = 'translateZ(-100px) rotateX( 90deg)';
  }

  render() {
    const {
      loggingIn,
      registering
    } = this.props

    return (
      <div>
        <img src='/src/_assets/images/1x/logo-rectangle.png' />
        <div>
          <ul className='nav'>
            <li onClick={this.showLogin}>Login</li>
            <li onClick={this.showSignup}>Sign up</li>
            <li onClick={this.showForgotPassword}>Forgot password</li>
            <li onClick={this.showSubscribe}>Subscribe</li>
            <li onClick={this.showContactUs}>Contact</li>
          </ul>
        </div>
        <div className='wrapper'>
          <div className='rec-prism'>
            <div className='face face-right'>
              <SignupForm registering={this.props.registering} />
            </div>

            <div className='face face-front'>
              <LoginForm loggingIn={this.props.loggingIn}/>
            </div>

            <div className='face face-top'>
              <div className='content'>
                <h2>Subscribe</h2>
                <small>Enter your email so we can send you the latest updates!</small>
                <p>
                  Placeholder for email form
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  const { registering } = state.registration
  return {
    loggingIn,
    registering
  }
}

const connectedEntryPage = connect(mapStateToProps)(EntryPage)
export { connectedEntryPage as EntryPage }
