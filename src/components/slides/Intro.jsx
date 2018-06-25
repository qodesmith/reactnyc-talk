import React, { Component, Fragment } from 'react'
import { progress } from 'helpers'
import quest from '../../quest.jpg'
import mta from '../../mta.jpg'
import developer from '../../developer.jpg'

class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 0 }
  }

  componentWillMount() {
    this.removeListener = progress(this)
  }

  componentWillUnmount() {
    this.removeListener()
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  render() {
    const { step } = this.state

    return (
      <div className='tc pa3'>
        <h1>Hi, I'm Aaron!</h1>

        {
          step > 0 &&
          <div>
            <div>I went from rapping on tracks,</div>
            <div>to working on tracks,</div>
            <div>
              to <span className='i'>JavaScript Awesomeness™</span>
            </div>
          </div>
        }

        <img src={quest} width='33%' className={step > 1 ? 'pv6' : 'dn'} />
        <img src={mta} width='33%' className={step > 2 ? 'pv6' : 'dn'} />
        <img src={developer} width='33%' className={step > 3 ? 'pv6' : 'dn'} />
        {
          step > 4 &&
          <div>Quest The Wordsmith => Qodesmith</div>
        }
      </div>
    )
  }
}

export default Intro
