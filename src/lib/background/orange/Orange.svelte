<script>
  export let orangeGradient
</script>

<div 
  id='orange'
  style='--orangeX: {orangeGradient[0]}%; --orangeY: {orangeGradient[1]}%'>
</div>

<style>
  #orange {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
    z-index: -2;
		
		background: radial-gradient(
      farthest-side at var(--orangeX) var(--orangeY),
      hsla(25, 100%, 80%, 0.6) 20%,
      hsla(0, 0%, 100%, 0.1) 70%,
      transparent
    );
	}
</style>