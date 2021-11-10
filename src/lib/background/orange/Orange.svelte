<script>
  export let orangeGradientX
  export let orangeGradientY
</script>

<div 
  id='orange'
  style='--orangeX: {orangeGradientX}%; --orangeY: {orangeGradientY}%'>
</div>

<style>
  #orange {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
    z-index: 0;
		
		background: radial-gradient(
      farthest-side at var(--orangeX) var(--orangeY),
      hsla(25, 100%, 61%, 0.4) 10%,
      hsla(0, 0%, 100%, 0.7)
    );
	}
</style>