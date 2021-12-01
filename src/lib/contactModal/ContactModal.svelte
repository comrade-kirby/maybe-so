<script>
	import { contactModalOpen } from '$lib/stores';

  const closeContactModal = () => contactModalOpen.set(false)
</script>

{#if $contactModalOpen}
  <div>
    <button on:click={closeContactModal}>close</button>
  </div>
{/if}


<style>
  div {
    background-color: var(--black);
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    color: white;
  }
</style>