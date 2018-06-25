import React, { Component } from 'react'
import { progress } from 'helpers'

class Usage extends Component {
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
      <div className='pa3'>
        <h1 className='bb-1px dib mt0'>Usage</h1>
        {
          step > 0 &&
          <div>
            <div>Install globally:</div>
            <div className='code mt3 dib'>npm i -g create-new-app</div>
          </div>
        }

        {
          step > 1 &&
          <div className='mt6'>
            <div>Simple useage:</div>
            <div className='code mt3 dib'>cna &lt;app name&gt;</div>
          </div>
        }

        {
          step > 2 &&
          <div className='mt6'>
            <div>Even simpler - the guided process:</div>
            <div className='code mt3 dib'>cna</div>
          </div>
        }

        {
          step > 3 &&
          <div className='mt6'>
            <div>Fancy usage - options:</div>
            <div className='code mt3 dib'>cna my-cool-app --redux --express</div>
          </div>
        }

        {
          step > 4 &&
          <div className='mt6'>
            <div><span className='i'>Super</span> fancy usage - options:</div>
            <div className='code mt3 dib'>cna my-cool-app --mongo --offline --author="Qodesmith" --keywords="javascript rules"</div>
          </div>
        }
      </div>
    )
  }
}

export default Usage
