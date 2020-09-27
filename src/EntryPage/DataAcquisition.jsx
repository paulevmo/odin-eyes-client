import React from 'react'
import { Link } from 'react-router-dom'
import './entry.scss'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class DataAcquisition extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  render() {
    return (
      <div className='content signup'>
        <h2>Data Acquisition</h2>
        <p className="mission-p">
          <img src='/src/_assets/images/collect.png' width={60} />
          <br />
          Collect publically available data from any online source.
        </p>

        <p className="mission-p">
          <img src='/src/_assets/images/spider.png' width={60} />
          <br />
          Traverse software applications and extract information.
        </p>

        <p className="mission-p">
          <img src='/src/_assets/images/schedule.png' width={60} />
          <br />
          Schedule periodic and frequent collection of real-time data.
        </p>

        <CubeNav currentFace='data'/>
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

export { DataAcquisition }
