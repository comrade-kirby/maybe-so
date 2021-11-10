import { get } from 'svelte/store'

import {
  purpleGradientX,
  purpleGradientY,
  pinkGradientX,
  pinkGradientY,
  orangeGradientX,
  orangeGradientY
} from '$lib/stores'

export const updateGradients = (event, width, height) => {
  updatePink(event, width, height)
  updatePurple(event, width, height)
  
}

const updatePink = (event, width, height) => {
  pinkGradientX.set(clamp(event.pageX / width * 100, 0, 100))
	pinkGradientY.set(clamp(event.pageY / height * 100, 0, 100))
}

const updatePurple = (event, width, height) => {
  const currentPurpleX = get(purpleGradientX) * width / 100
  const currentPurpleY = get(purpleGradientY) * height / 100

  const minDistance = 500
  const minDistanceSquared = minDistance ** 2

  const pinkXDistance = event.pageX - currentPurpleX
  const pinkYDistance = event.pageY - currentPurpleY
  
  const pinkDistanceSquared = pinkXDistance ** 2 + pinkYDistance ** 2

  if (pinkDistanceSquared < minDistanceSquared) {
    const slope = (currentPurpleY - event.pageY) / (currentPurpleX - event.pageX)

    const slopeSquared = slope ** 2
    const r = (1 + slopeSquared) ** 0.5
    const dx = minDistance / r
    const dy = (minDistance * slope) / r

    const pointAX = event.pageX + dx
    const pointAY = event.pageY + dy
    const pointBX = event.pageX - dx
    const pointBY = event.pageY - dy

    const aDistanceSquared = (currentPurpleX - pointAX) ** 2 + (currentPurpleY - pointAY) ** 2
    const bDistanceSquared = (currentPurpleX - pointBX) ** 2 + (currentPurpleY - pointBY) ** 2

    if (aDistanceSquared < bDistanceSquared) {
      purpleGradientX.set(clamp(pointAX/ width * 100, 10, 90))
      purpleGradientY.set(clamp(pointAY/ height * 100, 10, 90))
    } else {
      purpleGradientX.set(clamp(pointBX/ width * 100, 10, 90))
      purpleGradientY.set(clamp(pointBY/ height * 100, 10, 90))
    }
  }
}

const clamp = (num, min, max) => Math.round(Math.min(Math.max(num, min), max)) 