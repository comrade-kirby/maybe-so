<script>
  export let purpleGradientX
  export let purpleGradientY
</script>

<div 
  id='purple'
  style='--purpleX: {purpleGradientX}%; --purpleY: {purpleGradientY}%'>
</div>

<style>
  #purple {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		z-index: 0;
		
		background: radial-gradient(
			at var(--purpleX) var(--purpleY),
			hsla(306, 50%, 80%, 0.5) 20%, 
			hsla(47, 100%, 80%, 0.2)
		);
	}
</style>