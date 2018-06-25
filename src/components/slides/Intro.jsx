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

        <div className='dib intro-img'>
          <img src={quest} width='100%' className={step > 1 ? 'mv6' : 'dn'} />
        </div>
        <div className='dib intro-img'>
          <img src={mta} width='100%' className={step > 2 ? 'mv6' : 'dn'} />
        </div>
        <div className='dib intro-img'>
          <img src={developer} width='100%' className={step > 3 ? 'mv6' : 'dn'} />
        </div>
        {
          step > 4 &&
          <div>Quest The Wordsmith => Qodesmith</div>
        }
      </div>
    )
  }
}

export default Intro
