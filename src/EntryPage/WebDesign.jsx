import React from 'react'
import { Link } from 'react-router-dom'
import './entry.scss'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class WebDesign extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  render() {
    return (
      <div className='content signup'>
        <h2>Web Design</h2>
        <p className="mission-p">
          <img src='/src/_assets/images/moderndesign.png' width={60} />
          <br />
          Sleek and modern user interface design.
        </p>

        <p className="mission-p">
          <img src='/src/_assets/images/intuitive.png' width={60} />
          <br />
          Intuitive and seamless user expereince.
        </p>

        <p className="mission-p">
          <img src='/src/_assets/images/feedback.png' width={60} />
          <br />
          Incremental development cycles with frequent client feedback.
        </p>

        <CubeNav currentFace='design'/>
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

export { WebDesign }
