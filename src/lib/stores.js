import { tweened } from 'svelte/motion';

export const purpleGradientX = tweened(0, { duration: 1000 })
export const purpleGradientY = tweened(0, { duration: 1000 })
export const pinkGradientX = tweened(50, { duration: 1000 })
export const pinkGradientY = tweened(50, { duration: 1000 })
export const orangeGradientX = tweened(75, { duration: 1000 })
export const orangeGradientY = tweened(75, { duration: 1000 })

export const purpleGradient = tweened([0, 0], { duration: 1000 })
export const pinkGradient = tweened([0, 0], { duration: 1000 })
export const orangeGradient = tweened([0, 0], { duration: 1000 })