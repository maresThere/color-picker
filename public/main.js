const main = () => {
  let hueVal = Math.round(Math.random() * 360)
  let satVal = 50
  let lightVal = 50
  let alphaVal = 1
  let swatch = document.querySelector('div.swatch')
  let numberValues = document.querySelector('div.hslaValues')
  let sat = document.querySelector('div.sat')

  let color = `hsla(${hueVal}, ${satVal}%, ${lightVal}%, ${alphaVal})`
  swatch.style.backgroundColor = color
  numberValues.textContent = `HSLA (${hueVal}, ${satVal}%, ${lightVal}%, ${alphaVal})`

  const hueSlider = document.querySelector('input[name = hue]')
  hueSlider.addEventListener('input', (event) => {
    hueVal = event.target.value
    updateColor()
  })

  const satSlider = document.querySelector('input[name = saturation]')
  satSlider.addEventListener('input', (event) => {
    satVal = event.target.value
    updateColor()
  })
  const lightSlider = document.querySelector('input[name = lightness]')
  lightSlider.addEventListener('input', (event) => {
    lightVal = event.target.value
    updateColor()
  })
  const alphaSlider = document.querySelector('input[name = alpha]')
  alphaSlider.addEventListener('input', (event) => {
    alphaVal = event.target.value / 100
    updateColor()
  })
  const updateColor = () => {
    let color = `hsla(${hueVal}, ${satVal}%, ${lightVal}%, ${alphaVal})`
    swatch.style.backgroundColor = color
    sat.style.background = `linear-gradient:(100deg, hsl(${hueVal}, ${satVal}, 0%), blue)`

    alphaVal < 1 ? numberValues.textContent = `HSLA (${hueVal}, ${satVal}%, ${lightVal}%, ${alphaVal})` : numberValues.textContent = `HSL (${hueVal}, ${satVal}%, ${lightVal}%)`
  }
}

document.addEventListener('DOMContentLoaded', main)
