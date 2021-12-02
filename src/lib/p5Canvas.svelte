<script>
	import { onMount } from "svelte"
	
  let p5
	export let sketch

	onMount(async () => {
    const module = await import("p5")
    p5 = module.default
	  
    new p5(sketch)
  })
</script>