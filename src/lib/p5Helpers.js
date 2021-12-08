const primaryOpacity = 0
const hoverOpacity = 10

export const transparentText = (p5, options) => {
  const { 
    text,
    textSize,
    textLeading,
    bold,
    // horizontalAlignment,
    // verticalAlignment,
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
  p5.textStyle(p5.NORMAL)
  p5.textSize(textSize)
  p5.textLeading(textLeading)
  p5.textAlign(p5.LEFT, p5.TOP)
  
  p5.fill(0)
  p5.noStroke()
  
  p5.erase(erase)
  p5.textWrap(p5.WORD)
  p5.text(text, xPosition, yPosition, width, height)
  p5.noErase()
  
  p5.fill(0, 0, 0, opacity)
  p5.text(text, xPosition, yPosition, width, height)
}

export const drawContainer = (p5, width, height, xPosition = 0) => { 
  p5.fill(0, 0, 15)
  p5.noStroke()
  p5.rect(xPosition, 0, width, height)
}

export const setupCanvas = (p5, width, height, parentId) => {
  const canvas = p5.createCanvas(width, height)
  canvas.parent(parentId)
  p5.colorMode(p5.HSL, 360, 100, 100, 100)
  p5.textFont('Sneak')
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

export const drawInput = (p5, inputId, containerId, value) => {
  p5.textFont('Sneak')
  const yOffset = 5
  const xOffset = 5

  const container = document.getElementById(containerId)
  const containerRect = container.getBoundingClientRect()
  const el = document.getElementById(inputId)
  const elRect = el.getBoundingClientRect()
  const elStyle = window.getComputedStyle(el, null)
  const elFontSize = Number(elStyle.getPropertyValue('font-size').slice(0, -2))

  transparentText(p5, {
    text: value,
    xPosition: elRect.x + xOffset,
    yPosition: elRect.top - containerRect.top + yOffset,
    width: elRect.width,
    height: elRect.height,
    textSize: elFontSize
  })

  const border = () => {
    p5.line(elRect.left, elRect.bottom - containerRect.top, elRect.right, elRect.bottom - containerRect.top)
  }

  transparentShape(p5, border, {stroke: true, fill: true, opacity: 0})
}

export const drawLabel = (p5, labelId, containerId) => {
  p5.textFont('EditorialNew')
  const container = document.getElementById(containerId)
  const containerRect = container.getBoundingClientRect()

  const el = document.getElementById(labelId)
  const value = el.innerHTML
  const elRect = el.getBoundingClientRect()
  const elStyle = window.getComputedStyle(el, null)
  const elFontSize = Number(elStyle.getPropertyValue('font-size').slice(0, -2))

  transparentText(p5, {
    text: value || inputId.toUpperCase(),
    xPosition: elRect.x,
    yPosition: elRect.top - containerRect.top,
    width: elRect.width,
    height: elRect.height,
    textSize: elFontSize
  })
}

export const drawXIcon = (p5, buttonId, containerId, hover, progress=1) => {
  const container = document.getElementById(containerId)
  const containerRect = container.getBoundingClientRect()

  const el = document.getElementById(buttonId)
  const elRect = el.getBoundingClientRect()
  // const opacity = getOpacity(hover) * progress
  // const length = screenSize == 'small' ? 7 : 10
  p5.strokeWeight(2)
  const xIcon = () => {
    p5.line(elRect.left, elRect.top - containerRect.top, elRect.right, elRect.bottom - containerRect.top)
    p5.line(elRect.left, elRect.bottom - containerRect.top, elRect.right, elRect.top - containerRect.top)
  }

  const options = { stroke: true, opacity: 0 }
  transparentShape(p5, xIcon, options)
}