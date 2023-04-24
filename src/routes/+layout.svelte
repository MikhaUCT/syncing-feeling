<script lang="ts">
	import "../scss/style.scss";
	import { base } from "$app/paths";
	import Logo from "../lib/Logo.svelte";
</script>

<nav>
	<a href="{base}/">
		<Logo width={150} />
	</a>
	<div class="options">
		<a href="{base}/pricing">Pricing</a>
		<a href="{base}/features">Features</a>
		<a href="{base}/contact">Contact</a>
	</div>
</nav>
<slot />

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: teal;
	}
	.options {
		display: flex;
		gap: 5rem;
		align-items: center;
		text-decoration: none;
	}
</style>
