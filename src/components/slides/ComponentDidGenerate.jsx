import React, { Component } from 'react'
import { progress } from 'helpers'

class ComponentDidGenerate extends Component {
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
        <h1 className='bb-1px dib mt0'>componentDidGenerate</h1>

        {
          step < 13 &&
          <div>
            {
              step > 0 &&
              <div>Create React App</div>
            }

            <div className='ml3'>
              {/* PROS */}
              {
                step > 1 &&
                <div className='f-0-8em u mt4'>My pro's:</div>
              }
              {
                step > 2 &&
                <ul className='lh-1-2 f-0-7em mt0'>
                  <li>simple command to spin up a new app</li>
                  {
                    step > 3 &&
                    <li>up and running quickly</li>
                  }
                  {
                    step > 4 &&
                    <li>abstracts away underlying code, user focused on building</li>
                  }
                  {
                    step > 5 &&
                    <li>it's React!</li>
                  }
                </ul>
              }

              {/* CONS */}
              {
                step > 6 &&
                <div className='f-0-8em u mt4'>My con's:</div>
              }
              {
                step > 7 &&
                <ul className='lh-1-2 f-0-7em mt0'>
                  <li>doesn't include SCSS</li>
                  {
                    step > 8 &&
                    <li>doesn't include Redux</li>
                  }
                  {
                    step > 9 &&
                    <li>no back end option</li>
                  }
                  {
                    step > 10 &&
                    <li>lot's of "magic" happening (need to eject to see source code)</li>
                  }
                  {
                    step > 11 &&
                    <li>uses Yarn</li>
                  }
                </ul>
              }
            </div>
          </div>
        }

        {
          step > 12 &&
          <div>
            <div className='mb4'>
              Create <span className='i'>New</span> App!
              <div className='f-0-5em'>
                <a href='https://www.npmjs.com/package/create-new-app'>npmjs.com/package/create-new-app</a>
              </div>
            </div>

            {
              step > 13 &&
              <ul className='lh-1-2 f-0-7em mt0'>
                <li>simple command to spin up a new app</li>
                {
                  step > 14 &&
                  <li>includes SCSS</li>
                }
                {
                  step > 15 &&
                  <li>includes Redux (optionally)</li>
                }
                {
                  step > 16 &&
                  <li>includes Express & MongoDB (optionally)</li>
                }
                {
                  step > 17 &&
                  <li>uses Webpack 4</li>
                }
                {
                  step > 18 &&
                  <li>uses the latest @babel scoped packages</li>
                }
                {
                  step > 19 &&
                  <li>uses NPM</li>
                }
                {
                  step > 20 &&
                  <li>no ejecting to see source code</li>
                }
              </ul>
            }
          </div>
        }
      </div>
    )
  }
}

export default ComponentDidGenerate
