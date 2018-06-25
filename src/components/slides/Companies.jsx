import React, { Component } from 'react'
import { progress } from 'helpers'
import transfix from '../../transfix.png'


class Companies extends Component {
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

  render() {
    const { step } = this.state

    return (
      <div className='vh-100 df justify-center align-items-center flex-col'>
        <img src={transfix} />
        {
          step > 0 &&
          <div className='tc'>
            <div className='f-0-7em'>James Gallagher</div>
            <div className='f-0-7em'>
              <a href='mailto:jamesgallagher@transfix.io'>jamesgallagher@transfix.io</a>
            </div>
          </div>
        }
        {
          step > 1 &&
          <div className='tc'>
            <hr />
            <h1 className='f-1-5em ma0'>Bloomberg</h1>
            <div className='f-0-7em'>Wendy Kim</div>
            <div className='f-0-7em'>
              <a href='mailto:wkim93@bloomberg.net'>wkim93@bloomberg.net</a>
            </div>
          </div>
        }
        {
          step > 2 &&
          <div className='tc'>
            <hr />
            <h1 className='f-1-5em ma0'>Aaron Cordova</h1>
            <div className='f-0-7em'>
              <a href='http://aaroncordova.xyz'>aaroncordova.xyz</a>
            </div>
            <div className='f-0-7em'>
              <a href='http://freestylefam.com'>freestylefam.com</a>
            </div>
            <div className='f-0-7em'>
              <a href='mailto:theqodesmith@gmail.com'>theqodesmith@gmail.com</a>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Companies
