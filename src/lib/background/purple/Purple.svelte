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
		
		/* fallback if gradeints don't work */
		background: rgba(255, 200, 0, 0.20);
		background: radial-gradient(at var(--purpleX) var(--purpleY), rgba(183, 0, 164, 0.60), rgba(255, 200, 0, 0));
	}
</style>