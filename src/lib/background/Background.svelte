<script>
	import Purple from '$lib/background/purple/Purple.svelte'
	import Pink from '$lib/background/pink/Pink.svelte'
	import { 
		purpleGradientX,
		purpleGradientY,
		pinkGradientX,
		pinkGradientY 
	} from '$lib/stores'
</script>

<div class='background' >
	<!-- <Purple 
		purpleGradientX={$purpleGradientX} 
		purpleGradientY={$purpleGradientY} /> -->
	<Pink 
		pinkGradientX={$pinkGradientX} 
		pinkGradientY={$pinkGradientY} />

</div>