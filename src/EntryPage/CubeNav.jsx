import React from 'react'
import './entry.scss'

class CubeNav extends React.Component {
  constructor(props) {
    super(props)

    this.showLogin = this.showLogin.bind(this)
    this.showMission = this.showMission.bind(this)
    this.showWebDesign = this.showWebDesign.bind(this)
    this.showDataAcquisition = this.showDataAcquisition.bind(this)
    this.showContactUs = this.showContactUs.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  showLogin () {
    this.prism.style.transform = 'translateZ(-100px)'
  }

  showMission () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -90deg)'
  }

  showWebDesign () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( -180deg)'
  }

  showDataAcquisition () {
    this.prism.style.transform = 'translateZ(-100px) rotateX( -90deg)'
  }

  showContactUs () {
    this.prism.style.transform = 'translateZ(-100px) rotateY( 90deg)'
  }

  showThankYou (){
    // TODO: do this after a subscribe or contact submit
    this.prism.style.transform = 'translateZ(-100px) rotateX( 90deg)';
  }

  render() {
    return (
      <div>
        <ul className='nav'>
          { this.props.currentFace === 'login' ? null :
            <li onClick={this.showLogin}>
              <img src='/src/_assets/images/login.png' width={45} />
              <br />
              Login
            </li> }
          { this.props.currentFace === 'mission' ? null :
            <li onClick={this.showMission}>
              <img src='/src/_assets/images/mission.png' width={45} />
              <br />
              Mission
            </li>
          }
          { this.props.currentFace === 'data' ? null :
            <li onClick={this.showDataAcquisition}>
              <img src='/src/_assets/images/data.png' width={45} />
              <br />
              Data Acquisition
            </li>
          }
          { this.props.currentFace === 'design' ? null :
            <li onClick={this.showWebDesign}>
              <img src='/src/_assets/images/webdesign.png' width={45} />
              <br />
              Web Design
            </li>
          }
          { this.props.currentFace === 'contact' ? null :
            <li onClick={this.showContactUs}>
              <img src='/src/_assets/images/email.jpg' width={45} />
              <br />
              Contact
            </li>
          }
        </ul>
      </div>
    )
  }
}

export { CubeNav }
