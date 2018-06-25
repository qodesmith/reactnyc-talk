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
          <div className='code tl dib mha'>
            <div>
              <span className='turquoise i'>function</span> <span className='lime'>changeMyLife</span>(<span className='orange i'>me</span>) {'{'}
            </div>
            <div>
              &nbsp;&nbsp;<span className='deeppink'>delete</span> me<span className='deeppink'>.</span>trackWorker <span className='gray'>// Bye bye.</span>
            </div>
            <br />
            <div>
              &nbsp;&nbsp;me<span className='deeppink'>.</span>hipHopArtist <span className='deeppink'>=</span> <span className='yellow'>'woulda been great'</span>
            </div>
            <div>
              &nbsp;&nbsp;me<span className='deeppink'>.</span>webDeveloper <span className='deeppink'>=</span> <span className='yellow'>'finally found my calling'</span>
            </div>
            <br />
            <div>
              &nbsp;&nbsp;<span className='deeppink'>return</span> me;
            </div>
            <div>{'}'}</div>
          </div>
        }
      </div>
    )
  }
}

export default Intro
