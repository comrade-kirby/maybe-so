<script>
  export let text
</script>

<button>
  {text}
</button>

<style>
  button {
    padding: 24px 50px;
    font-size: 1.125rem;
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
      /* align-self: unset; */
    }
  }
</style>