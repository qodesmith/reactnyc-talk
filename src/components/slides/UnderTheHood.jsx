import React, { Component } from 'react'
import { progress } from 'helpers'

class UnderTheHood extends Component {
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
        <h1 className='bb-1px dib mt0'>Under The Hood</h1>
        {
          step > 0 &&
          <div>
            <div>Dependencies (4):</div>
            <ol className='lh-1-2 f-0-7em mt0'>
              <li><a href='https://www.npmjs.com/package/command-line-args'>command-line-args</a></li>
              {
                step > 1 &&
                <li><a href='https://www.npmjs.com/package/validate-npm-package-name'>validate-npm-package-name</a></li>
              }
              {
                step > 2 &&
                <li><a href='https://www.npmjs.com/package/chalk'>chalk</a></li>
              }
              {
                step > 3 &&
                <li><a href='https://www.npmjs.com/package/fs-extra'>fs-extra</a></li>
              }
            </ol>
          </div>
        }

        {
          step > 4 &&
          <div className='mt6'>
            <div>Readline:</div>
            <div className='code dib'>
              <div>
                <span className='turquoise i'>const</span> readline <span className='deeppink'>=</span> <span className='turquoise'>require</span>(<span className='yellow'>'readline'</span>)
              </div>

              <br />

              <div>
                <span className='turquoise i'>const</span> rl <span className='deeppink'>=</span> readline<span className='deeppink'>.</span><span className='turquoise'>createInterface</span>({'{'}
              </div>
              <div>&nbsp;&nbsp;<span className='yellow'>input</span><span className='mediumorchid'>:</span> <span className='turquoise i'>process<span className='deeppink'>.</span>stdin</span>,</div>
              <div>&nbsp;&nbsp;<span className='yellow'>output</span><span className='mediumorchid'>:</span> <span className='turquoise i'>process<span className='deeppink'>.</span>stdout</span>,</div>
              <div>&nbsp;&nbsp;<span className='yellow'>prompt</span><span className='mediumorchid'>:</span> <span className='yellow'>'What is your name?'</span></div>
              <div>{'}'})</div>

              <br />

              <div className='gray'>// Trigger the user prompt.</div>
              <div>
                rl<span className='deeppink'>.</span><span className='turquoise'>prompt</span>()
              </div>

              <br />

              <div className='gray'>// Event listener that triggers when the user hit's enter.</div>
              <div>rl<span className='deeppink'>.</span><span className='turquoise'>on</span>(<span className='yellow'>'line'</span>, <span className='orange'>answer</span> <span className='turquoise'>=></span> {'{'}</div>
              <div>&nbsp;&nbsp;rl<span className='deeppink'>.</span><span className='turquoise'>close</span>()</div>
              <br />
              <div className='gray'>&nbsp;&nbsp;// Do something with the user's answer.</div>
              <div>})</div>
            </div>

          </div>
        }

        {
          step > 5 &&
          <div className='mt6'>
            <div>Executable magic:</div>
            <div>
              <span className='code dib'>#!/usr/bin/env node</span> <span className='f-0-7em'>- at the top of your entry file</span>
            </div>
            <div className='mt3'>
              <div className='code dib'>
                "bin": {'{'}
                <div>&nbsp;&nbsp;"create-new-app": "./main.js",</div>
                <div>&nbsp;&nbsp;"cna": "./main.js"</div>
                }
              </div>
              <span className='f-0-7em'> - added to your package.json file</span>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default UnderTheHood
