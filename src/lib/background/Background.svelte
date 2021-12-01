<script>
	import Purple from '$lib/background/purple/Purple.svelte'
	import Pink from '$lib/background/pink/Pink.svelte'

	import { 
		purpleGradient,
		pinkGradient,
		orangeGradient
	} from '$lib/stores'

import Orange from './orange/Orange.svelte';
</script>

<div class='background' >
	<Pink pinkGradient={$pinkGradient} />
	<Purple purpleGradient={$purpleGradient} />
	<Orange orangeGradient={$orangeGradient} />
</div>

<style>
	.background {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		background-color: var(--yellow-white);
		z-index: -1;
	}
</style>