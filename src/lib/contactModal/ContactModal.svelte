<script>
	import { contactModalOpen } from '$lib/stores';
  import P5Canvas from '$lib/p5Canvas.svelte'
  import {
    closeButtonMargin,
    drawContainer,
    drawXIcon,
    getOpacity,
    transparentText,
    transparentTitle,
    setupCanvas
  } from '$lib/p5Helpers.js'

  let name, email, introduction, h, w
  let closeButtonHover = false
  let messageSent = false

  const margin = 50

  const closeContactModal = () => contactModalOpen.set(false)

  const sketch = p5 => {
    p5.setup = () => {
      setupCanvas(p5, w, h, 'contact-modal')
    }

    p5.draw = () => {
      p5.clear()
      drawContainer(p5, w, h)
      drawXIcon(p5, w - margin, margin, closeButtonHover, 'large')
      if (!messageSent) {
        drawLabels(p5)
        drawSubmitButton(p5)
      } else {
        drawThankyou(p5)
      }
      if (errorMessage) { drawErrorMessage(p5) }
    }

    p5.windowResized = () => {
      p5.resizeCanvas(contactWidth, contactHeight)
      p5.redraw()
    }
  }
</script>

{#if $contactModalOpen}
  <div id='contact-modal' bind:clientHeight={h} bind:clientWidth={w}>

    <button class='close-button' on:click={closeContactModal}>close</button>
    <form action="https://formspree.io/mqkyvzdr" method="POST">
        <input 
          type='text'
          name='name'
          id='name'
          required
          bind:value={name}
          placeholder='NAME' >
        <label for='name'>NAME</label>
        <input 
          type='email'
          name='email'
          id='email'
          required
          bind:value={email}
          placeholder='EMAIL'>
        <label for='email'>EMAIL</label>
        <textarea 
          name='introduction'
          id='introduction'
          required
          bind:value={introduction}
          placeholder='INTRODUCTION' />
        <label for='introduction'>INTRODUCTION</label>
      <button type="submit">SUBMIT</button>
    </form>
    <P5Canvas sketch={sketch} />
  </div>
{/if}


<style>
  #contact-modal {
    background-color: var(--black);
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    /* background-color: red; */
  }


  /* input, textarea {
    margin: 0;
    padding: 4px 0;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
    background-color: var(--white);
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  :focus {
    background-color: white;
    outline: none;
  }

  :focus::placeholder {
    opacity: 0;
  }

  label {
    position: relative;
    text-align: right;
    top: -20px;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  button {
    background-color: var(--white);
    
    color: var(--black);
    transition: 0.2s ease-in-out;
  }

  button:hover, button:focus {
    background-color: var(--yellow);
  } */
</style>