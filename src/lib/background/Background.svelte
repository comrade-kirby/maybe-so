<script>
	import Purple from '$lib/background/purple/Purple.svelte'
	import Pink from '$lib/background/pink/Pink.svelte'
	import { 
		purpleGradientX,
		purpleGradientY,
		pinkGradientX,
		pinkGradientY,
		orangeGradientX,
		orangeGradientY 
	} from '$lib/stores'
import Orange from './orange/Orange.svelte';
</script>

<div class='background' >
	<Pink 
		pinkGradientX={$pinkGradientX} 
		pinkGradientY={$pinkGradientY} />
	<Purple 
		purpleGradientX={$purpleGradientX} 
		purpleGradientY={$purpleGradientY} />
	<!-- <Orange 
		orangeGradientX={$orangeGradientX} 
		orangeGradientY={$orangeGradientY} /> -->
</div>

<style>
	.background {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		background-color: hsla(47, 100%, 70%, 0.4);
		z-index: -1;
	}
</style>