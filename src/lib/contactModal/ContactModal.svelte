<script>
	import { contactModalOpen } from '$lib/stores';
  import P5Canvas from '$lib/p5Canvas.svelte'
  import {
    drawContainer,
    drawXIcon,
    drawLabel,
    setupCanvas,
    drawInput
  } from '$lib/p5Helpers.js'

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
      drawXIcon(p5, 'close-button', 'p5-contact', closeButtonHover)
      if (!messageSent) {
        drawInputs()
        drawLabels()
        // drawSubmitButton(p5)
      } else {
        // drawThankyou(p5)
      }
      // if (errorMessage) { drawErrorMessage(p5) }
    }

    p5.windowResized = () => {
      p5.resizeCanvas(w, h)
      p5.redraw()
    }

    const drawInputs = () => {
      // p5.textAlign(p5.RIGHT, p5.CENTER)
      
      drawInput(p5, 'name', 'p5-contact', nameValue)
      drawInput(p5, 'email', 'p5-contact', emailValue)
      drawInput(p5, 'introduction', 'p5-contact', introductionValue)
    }

    const drawLabels = () => {
      drawLabel(p5, 'name-label', 'p5-contact')
      drawLabel(p5, 'email-label', 'p5-contact')
      drawLabel(p5, 'intro-label', 'p5-contact')
    }
  }
</script>

{#if $contactModalOpen}
  <div id='p5-contact' bind:clientHeight={h} bind:clientWidth={w}>
    <button id='close-button' on:click={closeContactModal}>close</button>
    <form action="https://formspree.io/mqkyvzdr" method="POST">
        <input 
          type='text'
          name='name'
          id='name'
          class:filled={nameValue}
          required
          bind:value={nameValue} >
        <label for='name' id='name-label'>NAME</label>
        <input 
          type='email'
          name='email'
          id='email'
          class:filled={emailValue}
          required
          bind:value={emailValue} >
        <label for='email' id='email-label'>EMAIL</label>
        <textarea 
          name='introduction'
          id='introduction'
          class:filled={introductionValue}
          required
          bind:value={introductionValue} />
        <label for='introduction' id='intro-label'>INTRODUCTION</label>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
  <P5Canvas sketch={sketch} />
{/if}


<style>
  #p5-contact {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  #close-button {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    right: 0;
    z-index: 1;
    margin: 50px;
    padding: 0;
    background-color: transparent;
    border: none;
    color: pink;
    border: 1px solid pink;
  }

  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    padding: 20px;
    max-width: 650px;
    z-index: 1;
  }

  input, textarea {
    margin-top: 10px;
    padding-left: 5px;
    border: none;
    font-family: Sneak;
    font-size: 1.25rem;
    color: transparent;
    background-color: transparent;
    caret-color : lightpink;
  }

  textarea {
    height: 100px;
  }

  label {
    margin-top: 10px;
    position: relative;
    transition: 0.2s ease-in-out;
    opacity: 0;
    align-self: flex-end;
    top: -30px;
  }

  :focus {
    outline: none;
    background-color: hsla(0, 100%, 90%, 0.1);
  }

  :focus + label, .filled + label {
    top: 0;
  }

  @media screen and (max-width: 700px) {
    input, textarea {
      font-size: 1rem;
    }

    #close-button {
      height: 20px;
      width: 20px;
      margin: 20px;
    }
  }
  
 
</style>