import React, { Component } from 'react'
import { progress } from 'helpers'

class InspirationMotivation extends Component {
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
        <h1 className='bb-1px dib mt0'>Inspiration</h1>
        {
          step > 0 &&
          <ul className='lh-1-2 f-0-7em mt0'>
            <li>Create React App!</li>
            {
              step > 1 &&
              <li>various shell scripts</li>
            }
          </ul>
        }

        {
          step > 2 &&
          <div>
            <h1 className='bb-1px dib mt0'>Motivation</h1>
            {
              step > 3 &&
              <ul className='lh-1-2 f-0-7em mt0'>
                <li>spin up React apps quickly for my own side projects</li>
                {
                  step > 4 &&
                  <li>
                    <span>include the toys I was playing with:</span>
                    <ul>
                      <li>SCSS</li>
                      <li>Redux</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </ul>
                  </li>
                }
                {
                  step > 5 &&
                  <li>learn webpack 4 (in all its glory)</li>
                }
                {
                  step > 6 &&
                  <li>because I can!</li>
                }
              </ul>
            }
          </div>
        }
      </div>
    )
  }
}

export default InspirationMotivation
