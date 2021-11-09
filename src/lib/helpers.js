import { get } from 'svelte/store'

import {
  purpleGradientX,
  purpleGradientY,
  pinkGradientX,
  pinkGradientY } from '$lib/stores'

export const updateGradients = (event, width, height) => {
  purpleGradientX.set(Math.round(event.pageX / width * 100))
	purpleGradientY.set(Math.round(event.pageY / height * 100))

  const currentPurpleX = get(purpleGradientX)
  const currentPurpleY = get(purpleGradientY)
  const currentPinkX = get(pinkGradientX)
  const currentPinkY = get(pinkGradientY)

  // if (!currentPinkX) { console.log(currentPurpleY)}

  const minDistance = 100
  const minDistanceSquared = minDistance ** 2

  const purplePinkXDistance = currentPurpleX - currentPinkX
  const purplePinkYDistance = currentPurpleY - currentPinkY
  
  const purplePinkDistanceSquared = purplePinkXDistance ** 2 + purplePinkYDistance ** 2

  if (purplePinkDistanceSquared < minDistanceSquared) {
    const slope = (currentPinkY - currentPurpleY) / (currentPinkX - currentPurpleX)

    const slopeSquared = slope ** 2
    const dx = 1 / (1 + slopeSquared) ** 1/2
    const dy = slope * dx

    const pointAX = currentPurpleX + dx
    const pointAY = currentPurpleY + dy
    const pointBX = currentPurpleX + dx
    const pointBY = currentPurpleY + dy

    const aDistanceSquared = (currentPinkX - pointAX) ** 2 + (currentPinkY - pointAY)
    const bDistanceSquared = (currentPinkX - pointBX) ** 2 + (currentPinkY - pointBY)

    if (aDistanceSquared < bDistanceSquared) {
      pinkGradientX.set(pointAX)
      pinkGradientY.set(pointAY)
    } else {
      pinkGradientX.set(pointBX)
      pinkGradientY.set(pointBY)
    }
  } else {
    console.log('doesnt need to move')
  }
}