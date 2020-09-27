import React from 'react'
import { Link } from 'react-router-dom'
import './entry.scss'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class Mission extends React.Component {
  constructor(props) {
    super(props)

    this.showLogin = this.showLogin.bind(this)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  showLogin () {
    this.prism.style.transform = 'translateZ(-100px)'
  }

  render() {
    return (
      <div className='content signup'>
        <h2>Mission</h2>
        <p class="mission-p">
          <img src='/src/_assets/images/empower.png' width={60} />
          <br />
          Empower creation of imaginative ideas.
        </p>

        <p class="mission-p">
          <img src='/src/_assets/images/cultivate.png' width={60} />
          <br />
          Enrich and cultivate value of existing software.
        </p>

        <p class="mission-p">
          <img src='/src/_assets/images/colate.png' width={60} />
          <br />
          Acquire, colate and aggregate insightful data
        </p>

        <CubeNav currentFace='mission'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration
  return {
    registering
  }
}

export { Mission }
