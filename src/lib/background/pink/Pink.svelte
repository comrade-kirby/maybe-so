<script>
  export let pinkGradientX
  export let pinkGradientY
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
    z-index: 0;
		
		background: radial-gradient(
      farthest-side at var(--pinkX) var(--pinkY),
      hsla(0, 100%, 80%, 0.4) 10%,
      hsla(0, 0%, 100%, 0.7)
    );
	}
</style>