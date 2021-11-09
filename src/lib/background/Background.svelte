<script>
  export let mouseXPercentage
  export let mouseYPercentage

</script>
<div 
  id='background'
  style='--mouseX: {mouseXPercentage}%; --mouseY: {mouseYPercentage}%'>
</div>

<style>
  #background {
		position: fixed;
		top:0px;
		left:0px;
		height:100%;
		width:100%;
		
		/* fallback if gradeints don't work */
		background: rgba(255, 200, 0, 0.20);
		background: radial-gradient(at var(--mouseX) var(--mouseY), rgba(183, 0, 164, 0.20), rgba(255, 200, 0, 0));
	}
</style>