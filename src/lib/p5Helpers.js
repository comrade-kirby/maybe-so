const primaryOpacity = 40
const hoverOpacity = 60

export const transparentText = (p5, options) => {
  const { 
    text,
    textSize,
    textLeading,
    bold,
    horizontalAlignment,
    verticalAlignment,
    xPosition,
    yPosition,
    width,
    height,
    hover,
    progress
  } = options

  let erase = 100
  let opacity = getOpacity(hover)

  erase = progress ? erase * progress : erase
  opacity = progress ? opacity * progress : opacity
  p5.textStyle(bold ? p5.BOLD: p5.NORMAL)
  p5.textSize(textSize)
  p5.textLeading(textLeading)
  p5.textAlign(horizontalAlignment, verticalAlignment)
  p5.fill(0)
  p5.noStroke()
  
  p5.erase(erase)
  p5.text(text, xPosition, yPosition, width, height)
  p5.noErase()
  
  p5.fill(0, 0, 0, opacity)
  p5.text(text, xPosition, yPosition, width, height)
}

export const transparentTitle = (p5, text, screenSize) => {
  const size = screenSize == 'large' ? 20 : 11
  const margin = screenSize == 'large' ? 40 : 20

  transparentText(p5, {
    text: text,
    textSize: size,
    bold: true,
    horizontalAlignment: p5.LEFT,
    verticalAlignment: p5.TOP,
    xPosition: margin,
    yPosition: margin,
  })
}

export const drawContainer = (p5, width, height, xPosition = 0) => { 
  p5.fill(0, 0, 100, 90)
  p5.noStroke()
  p5.rect(xPosition, 0, width, height)
}

export const setupCanvas = (p5, width, height, parentId) => {
  const canvas = p5.createCanvas(width, height)
  canvas.parent(parentId)
  p5.colorMode(p5.HSL, 360, 100, 100, 100)
  p5.textFont('Major Mono Display')
}

export const getOpacity = (hover) => hover ? hoverOpacity : primaryOpacity

export const transparentShape = (p5, shapeCallback, options) => {
  const { fill, stroke, progress=1, opacity } = options
  const maxErase = 100
  const currentErase = maxErase * progress
  
  fill ? p5.fill(0) : p5.noFill()
  stroke ? p5.stroke(0) : p5.noStroke()

  p5.erase(currentErase, currentErase)
  shapeCallback()
  p5.noErase()
  
  stroke ? p5.stroke(0, 0, 0, opacity * progress) : p5.noStroke()
  fill ? p5.fill(0, 0, 0, opacity * progress) : p5.noFill()
  shapeCallback()
}

export const drawLabel = (p5, text, x, y, hover, screenSize) => {
  const textSize = screenSize == 'small' ? 10 : 14
  transparentText(p5, {
    text: text,
    textSize,
    verticalAlignment: p5.CENTER,
    horizontalAlignment: p5.CENTER,
    xPosition: x,
    yPosition: y,
    hover
  })
}

export const drawDivider = (p5, x, y, hover) => {
  const opacity = getOpacity(hover)

  p5.strokeWeight(2)
  const divider = () => {
    p5.line(x, y, x + 60, y)
  }
  const options = { stroke: true, opacity }
  transparentShape(p5, divider, options)
}

export const drawXIcon = (p5, x, y, hover, screenSize, progress=1,) => {
  const opacity = getOpacity(hover) * progress
  const length = screenSize == 'small' ? 7 : 10
  p5.strokeWeight(2)
  const xIcon = () => {
    p5.line(x - length, y - length, x + length, y + length)
    p5.line(x - length, y + length, x + length, y - length)
  }

  const options = { stroke: true, opacity }
  transparentShape(p5, xIcon, options)
}

export const logStiffness = (value) => {
  const stiffnessMinPower = - 6
  return 10 ** ((1 - value) * stiffnessMinPower)
}

export const logDamping = (value) => {
  const dampingMinPower = - 4
  return 10 ** ((1 - value) * dampingMinPower)
}

export const closeButtonMargin = (screenSize) => {
  return screenSize == 'large' ? 50 : 30
}

export const openControlButtons = (controlButtons) => {
  controlButtons.forEach((button, index) => {
    const delay = (controlButtons.length - index) * 100
    button.set(1, { delay })
  })
}