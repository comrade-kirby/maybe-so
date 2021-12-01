import { tweened } from 'svelte/motion';
import { writable } from 'svelte/store';

export const pinkGradient = tweened([0, 0], { duration: 1000 })
export const purpleGradient = tweened([80, 20], { duration: 1000 })
export const orangeGradient = tweened([15, 75], { duration: 1000 })
export const contactModalOpen = writable(false)