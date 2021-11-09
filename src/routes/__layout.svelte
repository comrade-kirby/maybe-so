<script>
	// import Header from '$lib/header/Header.svelte';
	import Background from '$lib/background/Background.svelte';
	import '../app.css';

	import { tweened } from 'svelte/motion';

	let h, w

	const mouseXPercentage = tweened(0, { duration: 1000})
	const mouseYPercentage = tweened(0, { duration: 1000})

	const moveGradient = (e) => {
		mouseXPercentage.set(Math.round(e.pageX / w * 100))
		mouseYPercentage.set(Math.round(e.pageY / h * 100))
	}
</script>

<!-- <Header /> -->

<main on:mousemove={moveGradient}
	bind:clientWidth={w} 
	bind:clientHeight={h} >
	<slot />
</main>
<Background 
	mouseXPercentage={$mouseXPercentage} 
	mouseYPercentage={$mouseYPercentage} />

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
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
