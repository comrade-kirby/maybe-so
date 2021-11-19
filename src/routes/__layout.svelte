<script>
	import Background from '$lib/background/Background.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { updateGradients } from '$lib/helpers';
</script>


<main on:mousemove={(e) => updateGradients(e)} >
	<div>
		<slot />
	</div>
</main>
<Footer />
<Background />

<style>
	main {
		box-sizing: border-box;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0 90px;	
		box-sizing: border-box;
		z-index: 1;
	}

	div {
		width: 100%;
		max-width: 1400px;
	}

	@media screen and (max-width: 1000px) {
   	main {
			padding: 0 35px;
    }
}
</style>
