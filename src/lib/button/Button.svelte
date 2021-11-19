<script>
  export let text
</script>

<button>
  {text}
</button>

<style>
  button {
    /* margin-top: 80px; */
    padding: 24px 50px;
    font-size: 1.125rem;
    font-family: EditorialNew;
    font-weight: 400;
    background-color: transparent;
    border-radius: 260px;
    border: 2px solid var(--black);
    transition: 0.2s ease-in;

  }

  button:hover {
    box-shadow: 2px 3px var(--black);
  }
</style>