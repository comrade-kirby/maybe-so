<script>
	import Button from '$lib/button/Button.svelte'
	import { contactModalOpen } from './stores';

	const openContactModal = () => contactModalOpen.set(true)
</script>

<section>
	<h1>
		<span>(MAYBE SO)</span> is a digital creative studio that builds unique and accessible brands and web experiences.
	</h1>
	<Button text='LET’S MAKE SOMETHING TOGETHER' handleClick={openContactModal} />
</section>

<style>
  section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		min-height: 95vh;
	}

	h1 {
		margin-bottom: 80px;
	}

  span {
		font-family: EditorialNew;
		font-weight: 200;
    white-space: nowrap;
	}
</style>