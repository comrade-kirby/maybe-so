<script>
  export let pinkGradientX
  export let pinkGradientY

  // $: console.log(pinkGradientX)
</script>

<div 
  id='pink'
  style='--pinkX: {pinkGradientX}%; --pinkY: {pinkGradientY}%'>
</div>

<style>
  #pink {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		
		/* fallback if gradeints don't work */
		/* background: rgba(255, 200, 0, 0.20); */
		background: radial-gradient(at var(--pinkX) var(--pinkY), rgba(255, 94, 94, 0.60), rgba(255, 200, 0, 0));
	}
</style>