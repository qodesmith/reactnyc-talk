export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// Space bar listener to progress through a slide.
export const progress = component => {
  const listener = e => {
    if (e.which === 32) {
      component.setState(prevState => ({ step: prevState.step + 1 }))
    }
  }

  document.addEventListener('keyup', listener)

  return function removeEventFromComponent() {
    document.removeEventListener('keyup', listener)
  }
}
