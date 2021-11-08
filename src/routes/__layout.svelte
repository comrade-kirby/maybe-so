<script>
	// import Header from '$lib/header/Header.svelte';
	import '../app.css';

	let h, w, mouseXpercentage, mouseYpercentage, background

	const moveGradient = (e) => {
		mouseXpercentage = Math.round(e.pageX / w * 100);
		mouseYpercentage = Math.round(e.pageY / h * 100);
		background = document.getElementById('radial-gradient')
		background.style.setProperty('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)')
	}
</script>

<!-- <Header /> -->

<main id='radial-gradient' 
	on:mousemove={moveGradient}
	bind:clientWidth={w} bind:clientHeight={h} 
>
	<slot />
</main>

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
	}

	#radial-gradient {
		position:fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		
		/* Fallback if gradeints don't work */
		background: #9b59b6;
		/* Linear gradient... */
		background: 
			radial-gradient(
			at center, #3498db, #9b59b6
			);
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
