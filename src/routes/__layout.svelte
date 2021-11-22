<script>
	import { onMount } from 'svelte';
	import Background from '$lib/background/Background.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { updateDesktopGradients, updateMobileGradients } from '$lib/helpers';
	import { orientationX, orientationY } from '$lib/stores.js';

	let isMobile = false
	
	const requestOrientationPermission = () => {
			console.log("touchend")
			if (typeof DeviceOrientationEvent['requestPermission'] === 'function') {
				DeviceOrientationEvent.requestPermission()
				.then(response => {
					if (response == 'granted') {
						window.addEventListener('deviceorientation', (e) => updateMobileGradients(e, isMobile))
					}
				})
				.catch(console.error)
			} else {
				window.addEventListener('deviceorientation', (e) => updateMobileGradients(e, isMobile))
			}
	}

	onMount(() => {
		if (/Mobi/.test(navigator.userAgent)) {
			isMobile = true
		}
	})

</script>

<svelte:window on:touchend|once={(e) => requestOrientationPermission()} 
	on:mousemove={(e) => updateDesktopGradients(e, isMobile)} />

<main  >
	<p>tiltX: {$orientationX} tiltY: {$orientationY}</p>
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
