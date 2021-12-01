<script context="module">
	export const prerender = true
</script>

<script>
	import CanWeHelp from '$lib/CanWeHelp.svelte'
	import HowWeDoIt from '$lib/HowWeDoIt.svelte'
	import Intro from '$lib/Intro.svelte'
	import OurWork from '$lib/OurWork.svelte'
	import WhatWeDo from '$lib/WhatWeDo.svelte'
</script>

<svelte:head>
	<title>Maybe So</title>
</svelte:head>

<Intro />
<OurWork />
<WhatWeDo />
<HowWeDoIt />
<CanWeHelp />

