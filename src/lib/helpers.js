import { get } from 'svelte/store'

import {
  purpleGradient,
  pinkGradient,
  orangeGradient,
  orientationX,
  orientationY
} from '$lib/stores'

export const updateDesktopGradients = (event, isMobile) => {
  if (!isMobile) {
    const mouseCoords = [event.screenX, event.screenY]
    const width = window.innerWidth
    const height = window.innerHeight

    updatePink(mouseCoords, width, height)
    updatePurple(mouseCoords, width, height)
    updateOrange(mouseCoords, width, height)
  }
}

export const updateMobileGradients = (event, isMobile) => {
  const width = window.innerWidth
  const height = window.innerHeight
  
  const tiltCoords = calculateTiltCoords(event, width, height)

  updatePink(tiltCoords, width, height)
  updatePurple(tiltCoords, width, height)
  updateOrange(tiltCoords, width, height)
}

const calculateTiltCoords = (event, width, height) => {
  const currentPink = get(pinkGradient)
  const pxCoords = convertPercentilesToCoords(currentPink, width, height)
  
  const tiltX = event.gamma
  const tiltY = event.beta
  
  
  const speedMultiplier = 2
  const uprightTiltAdjustment = 35
  const adjustedTiltY = tiltY - uprightTiltAdjustment

  orientationX.set(tiltX)
  orientationY.set(adjustedTiltY)

  const newX = pxCoords[0] + tiltX * speedMultiplier
  const newY = pxCoords[1] + adjustedTiltY * speedMultiplier

  return [newX, newY]
}

const updatePink = (cursorCoords, width, height) => {
  const pinkX = clamp(cursorCoords[0] / width * 100, 0, 100)
  const pinkY = clamp(cursorCoords[1] / height * 100, 0, 100)
  
  pinkGradient.set([pinkX, pinkY])
}

const updatePurple = (cursorCoords, width, height) => {
  const minDistance = 500
  const minPercent = 10
  const maxPercent = 90

  const percentCoords = get(purpleGradient)
  const pxCoords = convertPercentilesToCoords(percentCoords, width, height)

  const minDistanceSquared = minDistance ** 2
  
  const distanceSquared = calculateDistanceSquared(cursorCoords, pxCoords)

  if (distanceSquared < minDistanceSquared) {
    const newCoords = calcNewCoords(cursorCoords, pxCoords, minDistance) 
    const newPercentCoords = calculatePercentile(newCoords, width, height)
    const clampedPercentCoords = clampPoint(newPercentCoords, minPercent, maxPercent)

    purpleGradient.set(clampedPercentCoords)
  }
}

const updateOrange = (cursorCoords, width, height) => {
  const minDistance = 1000
  const minPercent = 10
  const maxPercent = 90

  const percentCoords = get(orangeGradient)
  const pxCoords = convertPercentilesToCoords(percentCoords, width, height)

  const minDistanceSquared = minDistance ** 2
  
  const distanceSquared = calculateDistanceSquared(cursorCoords, pxCoords)

  if (distanceSquared < minDistanceSquared) {
    const newCoords = calcNewCoords(cursorCoords, pxCoords, minDistance) 
    const newPercentCoords = calculatePercentile(newCoords, width, height)
    const clampedPercentCoords = clampPoint(newPercentCoords, minPercent, maxPercent)

    orangeGradient.set(clampedPercentCoords)
  }
}

const convertPercentilesToCoords = (percentileArray, width, height) => {
  const coords = [
    percentileArray[0] * width / 100, 
    percentileArray[1] * height / 100
  ]

  return coords
}

const calculateDistanceSquared = (cursorCoords, coords) => {
  const xDistance = cursorCoords[0] - coords[0]
  const yDistance = cursorCoords[1] - coords[1]

  const distanceSquared = xDistance ** 2 + yDistance ** 2

  return distanceSquared
}

const calculateSlope = (cursorCoords, coords) => {
  const dy = coords[1] - cursorCoords[1]
  const dx = coords[0] - cursorCoords[0]
  const slope = dy / dx

  return slope
}

const calcNewCoords = (cursorCoords, pxCoords, distance) => {
  const potentialPointsAtDistance = calculatePointsAtDistance(cursorCoords, pxCoords, distance)

  const bestNewCoords = calculateBestPoint(pxCoords, potentialPointsAtDistance)

  return bestNewCoords
}

const calculatePointsAtDistance = (cursorCoords, coords, distance) => {
  const slope = calculateSlope(cursorCoords, coords)

  const slopeSquared = slope ** 2
  const r = (1 + slopeSquared) ** 0.5
  const dx = distance / r
  const dy = (distance * slope) / r

  const pointA = [cursorCoords[0] + dx, cursorCoords[1] + dy]
  const pointB = [cursorCoords[0] - dx, cursorCoords[1] - dy]

  return [pointA, pointB]
}

const calculateBestPoint = (coords, potentialPointsArray) => {
  const pointA = potentialPointsArray[0]
  const pointB = potentialPointsArray[1]

  const aDistanceArray = [
    coords[0] - pointA[0],
    coords[1] - pointA[1]
  ]

  const bDistanceArray = [
    coords[0] - pointB[0],
    coords[1] - pointB[1]
  ]

  const aDistanceSquared = (aDistanceArray[0]) ** 2 + (aDistanceArray[1]) ** 2
  const bDistanceSquared = (bDistanceArray[0]) ** 2 + (bDistanceArray[1]) ** 2

  const bestPoint = aDistanceSquared < bDistanceSquared ? pointA : pointB

  return bestPoint
}

const calculatePercentile = (point, width, height) => {
  const percentileArray = [
    point[0] / width * 100,
    point[1] / height * 100
  ]

  return percentileArray
}

const clampPoint = (point, min, max) => {
  const clampedPoint = [
    clamp(point[0], min, max), 
    clamp(point[1], min, max)
  ]

  return clampedPoint
}

const clamp = (num, min, max) => Math.round(Math.min(Math.max(num, min), max)) 