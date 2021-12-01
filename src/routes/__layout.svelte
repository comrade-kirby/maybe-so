<script>
	import Background from '$lib/background/Background.svelte';
	import Footer from '$lib/Footer.svelte';
	import ContactModal from '$lib/contactModal/ContactModal.svelte';
	import '../app.css';
	import { updateDesktopGradients, updateMobileGradients } from '$lib/helpers';

	const requestOrientationPermission = () => {
			if (typeof DeviceOrientationEvent['requestPermission'] === 'function') {
				DeviceOrientationEvent.requestPermission()
				.then(response => {
					if (response == 'granted') {
						window.addEventListener('deviceorientation', (e) => updateMobileGradients(e))
					}
				})
				.catch(console.error)
			} else {
				window.addEventListener('deviceorientation', (e) => updateMobileGradients(e))
			}
	}
</script>

<svelte:window on:touchend|once={(e) => requestOrientationPermission()} 
	on:mousemove={(e) => updateDesktopGradients(e)} />

<main  >
	<ContactModal />
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

	@media screen and (max-width: 350px) {
   	main {
			padding: 0 12px;
    }
	}
</style>
