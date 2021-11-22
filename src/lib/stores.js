import { tweened } from 'svelte/motion';
import { writable } from 'svelte/store';

export const pinkGradient = tweened([0, 0], { duration: 1000 })
export const purpleGradient = tweened([50, 50], { duration: 1000 })
export const orangeGradient = tweened([75, 90], { duration: 1000 })

export const orientationX = writable(0)
export const orientationY = writable(0)