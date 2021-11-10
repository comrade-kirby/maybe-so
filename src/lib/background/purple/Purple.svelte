<script>
  export let purpleGradient
</script>

<div 
  id='purple'
  style='--purpleX: {purpleGradient[0]}%; --purpleY: {purpleGradient[1]}%'>
</div>

<style>
  #purple {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		z-index: -1;
		
		background: radial-gradient(
			at var(--purpleX) var(--purpleY),
			hsla(306, 50%, 70%, 0.5) 20%, 
			hsla(47, 100%, 80%, 0.2)
		);
	}
</style>