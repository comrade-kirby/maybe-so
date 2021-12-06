<script>
	import { contactModalOpen } from '$lib/stores';
  import P5Canvas from '$lib/p5Canvas.svelte'
  import {
    drawContainer,
    drawXIcon,
    setupCanvas,
    drawLabel
  } from '$lib/p5Helpers.js'
import { debug } from 'svelte/internal';

  let nameValue, emailValue, introductionValue, h, w
  let closeButtonHover = false
  let messageSent = false

  const margin = 50

  const closeContactModal = () => contactModalOpen.set(false)

  const sketch = p5 => {
    p5.setup = () => {
      setupCanvas(p5, w, h, 'p5-contact')
    }

    p5.draw = () => {
      p5.clear()
      drawContainer(p5, w, h)
      drawXIcon(p5, 'close-button', closeButtonHover)
      if (!messageSent) {
        drawInputs(p5)
        // drawSubmitButton(p5)
      } else {
        // drawThankyou(p5)
      }
      // if (errorMessage) { drawErrorMessage(p5) }
    }

    p5.windowResized = () => {
      p5.resizeCanvas(contactWidth, contactHeight)
      p5.redraw()
    }

    const drawInputs = p5 => {
      // p5.textAlign(p5.RIGHT, p5.CENTER)
      
      drawLabel(p5, 'name', nameValue)
      drawLabel(p5, 'email', emailValue)
      drawLabel(p5, 'introduction', introductionValue)
    }
  }
</script>

{#if $contactModalOpen}
  <div class='contact-modal' bind:clientHeight={h} bind:clientWidth={w}>
    <div id='p5-contact'></div>
    <button id='close-button' on:click={closeContactModal}>close</button>
    <div class='contact-form'>
      <form action="https://formspree.io/mqkyvzdr" method="POST">
          <input 
            type='text'
            name='name'
            id='name'
            required
            bind:value={nameValue}
            placeholder='NAME' >
          <label for='name'>NAME</label>
          <input 
            type='email'
            name='email'
            id='email'
            required
            bind:value={emailValue}
            placeholder='EMAIL'>
          <label for='email'>EMAIL</label>
          <textarea 
            name='introduction'
            id='introduction'
            required
            bind:value={introductionValue}
            placeholder='INTRODUCTION' />
          <label for='introduction'>INTRODUCTION</label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
    <P5Canvas sketch={sketch} />
  </div>
{/if}


<style>
  .contact-modal {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
   
    align-items: center;
    z-index: 2;
  }

  #p5-contact {
    position: absolute;
    top: 0;
    left: 0;
  }

  #close-button {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    right: 0;
    z-index: 1;
    margin: 50px;
    background-color: transparent;
    border: none;
    color: transparent;
  }

  .contact-form {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 300px;
    box-sizing: border-box;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  input, textarea {
    background-color: transparent;
    border: none;
    font-family: Sneak;
    font-size: 1.5rem;
    color: transparent;
    caret-color : lightpink;
    margin-bottom: 20px;
  }

  textarea {
    height: 100px;
  }

  label {
    color: transparent;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: transparent;
  }
</style>