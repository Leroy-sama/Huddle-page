<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		viewBox="0 0 24 24"
	>
		<g :fill="fill">
			<path
				d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10"
			/>
			<path
				d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704"
			/>
		</g>
	</svg>
</template>

<script setup lang="ts">
	defineProps({
		fill: { type: String, default: "var(--clr-offWhite)" },
		width: { type: String, default: "24" },
		height: { type: String, default: "24" },
	});
</script>
