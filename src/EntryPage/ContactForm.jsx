import React from 'react'
import './entry.scss'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      message: '',
      submitted: false,
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showThankYou = this.showThankYou.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.contacted) this.showThankYou()
    return true
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  showThankYou () {
    this.prism.style.transform = 'translateZ(-100px) rotateX( 90deg)';
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { email, body } = this.state
    const { dispatch } = this.props
    if (email && body) {
      dispatch(userActions.contact(email, body))
      setState({
        email: '',
        message: '',
        submitted: false,
        error: ''
      })
    }
  }

  render() {
    const {
      email,
      body,
      submitted,
      error
    } = this.state

    return (
      <div className='content contact'>
        <h2>Contact</h2>
        <form name='form' onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' name='email' value={email} onChange={this.handleChange} />
            <div className="help-block">
              {submitted && !email ? 'Email is required' : null}
              &nbsp;
            </div>
          </div>
          <div className={'form-group' + (submitted && !body ? ' has-error' : '')}>
            <label htmlFor='body'>Body</label>
            <textarea className='form-control' name='body' value={body} onChange={this.handleChange} />
            <div className="help-block">{submitted && !body ? 'Body is required' : null}&nbsp;</div>
          </div>
          <div className='form-group text-center'>
            <button className='btn btn-info'>Send</button>
          </div>
        </form>

        <CubeNav currentFace='contact'/>
      </div>
    )
  }
}

export { ContactForm }
