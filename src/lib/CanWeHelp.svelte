<script>
  import Button from '$lib/button/Button.svelte'
</script>

<section>
  <h1>
		Can we help you with something? <span>(MAYBE SO)</span>
	</h1>
  <p>Think we might be a good fit? Reach out and say hi! Make sure to let us know a bit about yourself, your project, and any timeline or budget you may have in mind. </p>
	<Button text='LET’S MAKE SOMETHING TOGETHER' />
</section>

<style>
  section {
    padding: 200px 140px;
    display: flex;
    flex-direction: column;
  }

  span {
    font-family: EditorialNew;
		font-weight: 200;
    white-space: nowrap;
  }

  p {
    margin: 35px 0 75px;
  }

  @media screen and (max-width: 650px) {
    section {
      padding: 200px 0;
    }
  }
</style>