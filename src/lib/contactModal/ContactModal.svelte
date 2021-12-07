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
      drawXIcon(p5, 'close-button', closeButtonHover)
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
      console.log('resize')
      p5.resizeCanvas(w, h)
      p5.redraw()
    }

    const drawInputs = () => {
      // p5.textAlign(p5.RIGHT, p5.CENTER)
      
      drawInput(p5, 'name', nameValue)
      drawInput(p5, 'email', emailValue)
      drawInput(p5, 'introduction', introductionValue)
    }

    const drawLabels = () => {
      drawLabel(p5, 'name-label')
      drawLabel(p5, 'email-label')
      drawLabel(p5, 'intro-label')
    }
  }
</script>

{#if $contactModalOpen}
  <div id='p5-contact' bind:clientHeight={h} bind:clientWidth={w}>
    <!-- <div id='p5-contact'></div> -->
    <button id='close-button' on:click={closeContactModal}>close</button>
    <div class='contact-form'>
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
  </div>
{/if}


<style>
  #p5-contact {
    /* position: fixed; */
    position: absolute;
    /* top: 0; */
    height: 100%;
    width: 100%;
    /* color: white; */
    display: flex;
    /* overflow: scroll; */
    /* align-items: center; */
    z-index: 2;
  }

  /* #p5-contact {
    position: absolute;
    top: 0;
    left: 0;
  } */

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
    align-items: center;
    box-sizing: border-box;
  }

  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    max-width: 650px;
  }

  input, textarea {
    margin-top: 10px;
    /* background-color: transparent; */
    border: none;
    font-family: Sneak;
    font-size: 1.25rem;
    color: transparent;
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