<script>
  export let pinkGradient
</script>

<div 
  id='pink'
  style='--pinkX: {pinkGradient[0]}%; --pinkY: {pinkGradient[1]}%'>
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
      hsla(0, 100%, 80%, 0.3) 10%,
      hsla(0, 0%, 100%, 0.5)
    );
	}
</style>