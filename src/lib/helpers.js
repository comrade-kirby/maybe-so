import { get } from 'svelte/store'

import {
  purpleGradient,
  pinkGradient,
  orangeGradient,
  orientationX,
  orientationY,
  orientation
} from '$lib/stores'

export const updateDesktopGradients = (event, isMobile) => {
  // if (!isMobile) {
    const width = window.innerWidth
    const height = window.innerHeight
    updatePink(event, width, height)
    updatePurple(event, width, height)
    updateOrange(event, width, height)
  // }
}

export const updateMobileGradients = (event, isMobile) => {
  orientation.set(true)
  // console.log(isMobile)
  // if (isMobile) {
    const width = window.innerWidth
    const height = window.innerHeight
    const currentPink = get(pinkGradient)
    const pxCoords = convertPercentilesToCoords(currentPink, width, height)
    // console.log('mobile')
    const tiltX = event.beta
    const tiltY = event.gamma
    // console.log(event)
    orientationX.set(tiltX)
    orientationY.set(tiltY)

    if (tiltX > 0) { pxCoords[1] += 5 }
    if (tiltX < 0) { pxCoords[1] -= 5 }
    if (tiltY > 0) { pxCoords[0] += 5 }
    if (tiltY < 0) { pxCoords[0] -= 5 }

    const newPercentCoords = [
      clamp(pxCoords[0], 0, 100),
      clamp(pxCoords[1], 0, 100)
    ]

    pinkGradient.set(newPercentCoords)
  // }
}

const updatePink = (event, width, height) => {
  const pinkX = clamp(event.screenX / width * 100, 0, 100)
  const pinkY = clamp(event.screenY / height * 100, 0, 100)
  
  pinkGradient.set([pinkX, pinkY])
}

const updatePurple = (event, width, height) => {
  const minDistance = 500
  const minPercent = 10
  const maxPercent = 90

  const percentCoords = get(purpleGradient)
  const pxCoords = convertPercentilesToCoords(percentCoords, width, height)

  const minDistanceSquared = minDistance ** 2
  
  const distanceSquared = calculateDistanceSquared(event, pxCoords)

  if (distanceSquared < minDistanceSquared) {
    const newCoords = calcNewCoords(event, pxCoords, minDistance) 
    const newPercentCoords = calculatePercentile(newCoords, width, height)
    const clampedPercentCoords = clampPoint(newPercentCoords, minPercent, maxPercent)

    purpleGradient.set(clampedPercentCoords)
  }
}

const updateOrange = (event, width, height) => {
  const minDistance = 1000
  const minPercent = 10
  const maxPercent = 90

  const percentCoords = get(orangeGradient)
  const pxCoords = convertPercentilesToCoords(percentCoords, width, height)

  const minDistanceSquared = minDistance ** 2
  
  const distanceSquared = calculateDistanceSquared(event, pxCoords)

  if (distanceSquared < minDistanceSquared) {
    const newCoords = calcNewCoords(event, pxCoords, minDistance) 
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

const calculateDistanceSquared = (event, coords) => {
  const xDistance = event.screenX - coords[0]
  const yDistance = event.screenY - coords[1]

  const distanceSquared = xDistance ** 2 + yDistance ** 2

  return distanceSquared
}

const calculateSlope = (event, coords) => {
  const dy = coords[1] - event.screenY
  const dx = coords[0] - event.screenX
  const slope = dy / dx

  return slope
}

const calcNewCoords = (event, pxCoords, distance) => {
  const potentialPointsAtDistance = calculatePointsAtDistance(event, pxCoords, distance)

  const bestNewCoords = calculateBestPoint(pxCoords, potentialPointsAtDistance)

  return bestNewCoords
}

const calculatePointsAtDistance = (event, coords, distance) => {
  const slope = calculateSlope(event, coords)

  const slopeSquared = slope ** 2
  const r = (1 + slopeSquared) ** 0.5
  const dx = distance / r
  const dy = (distance * slope) / r

  const pointA = [event.screenX + dx, event.screenY + dy]
  const pointB = [event.screenX - dx, event.screenY - dy]

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