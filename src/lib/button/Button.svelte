<script>
  export let text
  export let handleClick
</script>

<button on:click={handleClick}>
  {text}
</button>

<style>
  button {
    padding: 16px 36px;
    font-size: 1rem;
    font-family: EditorialNew;
    font-weight: 400;
    background-color: transparent;
    border-radius: 260px;
    border: 2px solid var(--black);
    transition: 0.2s ease-in;
    align-self: flex-start;

  }

  button:hover {
    box-shadow: 2px 3px var(--black);
  }

  @media screen and (max-width: 1000px) {
    button {
      font-size: 0.75rem;
    }
  }
 
  @media screen and (max-width: 650px) {
    button {
      padding: 16px 0;
      border: 1px solid var(--black);
      align-self: stretch
    }
  }
</style>