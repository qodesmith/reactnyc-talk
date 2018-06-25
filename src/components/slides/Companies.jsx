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
            <div className='f-0-7em'>jamesgallagher@transfix.io</div>
          </div>
        }
        {
          step > 1 &&
          <div className='tc'>
            <hr />
            <h1 className='f-1-5em ma0'>Bloomberg</h1>
            <div className='f-0-7em'>Wendy Kim</div>
            <div className='f-0-7em'>wkim93@bloomberg.net</div>
          </div>
        }
        {
          step > 2 &&
          <div className='tc'>
            <hr />
            <h1 className='f-1-5em ma0'>Aaron Cordova</h1>
            <div className='f-0-7em'>aaroncordova.xyz</div>
            <div className='f-0-7em'>freestylefam.com</div>
            <div className='f-0-7em'>theqodesmith@gmail.com</div>
          </div>
        }
      </div>
    )
  }
}

export default Companies
