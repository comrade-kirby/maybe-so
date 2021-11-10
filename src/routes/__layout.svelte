<script>
	import Header from '$lib/header/Header.svelte';
	import Background from '$lib/background/Background.svelte';
	import '../app.css';
	// import {purpleGradientX, purpleGradientY} from '$lib/stores'
	import { updateGradients } from '$lib/helpers';

	let h, w
</script>


<main 
	on:mousemove={(e) => updateGradients(e, w, h)}
	bind:clientWidth={w} 
	bind:clientHeight={h} >
	<!-- <Header /> -->
	<!-- <slot /> -->
</main>
<Background />

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		/* max-width: 1024px; */
		margin: 0 auto;
		box-sizing: border-box;
		z-index: 1;
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
