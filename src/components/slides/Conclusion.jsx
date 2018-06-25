import React, { Component } from 'react'
import { progress } from 'helpers'

class Conclusion extends Component {
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
      <div className='pa3'>
        <h1 className='bb-1px dib mt0'>Conclusion</h1>

        {
          step > 0 &&
          <ul className='mt0 lh-1-2'>
            <li>you can create command line applications with just a few packages</li>
            {
              step > 1 &&
              <li className='mt1 mb2'>async / await + <span className='code'><span className='turquoise'>require</span>(<span className='yellow'>'readline'</span>)</span> === guided goodness</li>
            }
            {
              step > 2 &&
              <li>
                <span className='mono'><a href='https://github.com/qodesmith/create-new-app'>create-new-app</a></span> is a cli tool for generating React apps with goodies:
                <ul>
                  <li>SCSS</li>
                  <li>Redux</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </li>
            }
            {
              step > 3 &&
              <li>reinventing the wheel is a fantastic way to learn</li>
            }
          </ul>
        }
      </div>
    )
  }
}

export default Conclusion
