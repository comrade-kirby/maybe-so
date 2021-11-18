<script>
	import Background from '$lib/background/Background.svelte';
	import '../app.css';
	import { updateGradients } from '$lib/helpers';

	let h, w
</script>


<main 
	on:mousemove={(e) => updateGradients(e, w, h)}
	bind:clientWidth={w} 
	bind:clientHeight={h} >
	<slot />
</main>
<Background />

<style>
	main {
		box-sizing: border-box;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0 90px;
		box-sizing: border-box;
		z-index: 1;
	}
</style>
