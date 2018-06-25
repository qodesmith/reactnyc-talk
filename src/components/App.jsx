import React, { Component } from 'react'
import slides from 'components/slides'


class App extends Component {
  constructor(props) {
    super(props)
    this.lastSlide = slides.length - 1
    this.state = {
      error: null,
      slide: 5
    }
  }

  // React error handling!
  componentDidCatch(error) {
    this.setState({ error })
    console.log(error)
  }

  componentWillMount() {
    // Event listener to control the slides
    document.addEventListener('keyup', e => {
      if (e.which === 37) this.prior()
      if (e.which === 39) this.next()
    })

    // Some global styles!
    document.body.className = 'black-80 bg-black-10 f-2rem'
  }

  prior() {
    const { slide } = this.state
    if (slide === 0) return

    this.setState({ slide: slide - 1 })
  }

  next() {
    const { slide } = this.state
    if (slide === this.lastSlide) return

    this.setState({ slide: slide + 1 })
  }

  render() {
    const Slide = slides[this.state.slide]

    if (this.state.error) {
      return (
        <div className='w-50 w-100-m ph3'>
          <h2>Uh oh!</h2>
          <p>Looks like the client has encountered a problem.</p>
          <p>
            Please refresh your browser and try again.
            If this issue persists, scream and run around like you're on fire.
            Or, check the console and see what was logged. I mean either one is fine.
          </p>
        </div>
      )
    }

    return <Slide />
  }
}

export default App
