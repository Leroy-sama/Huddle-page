<script setup lang="ts">
	defineProps({
		level: {
			type: String,
			required: true,
			default: "Beginner",
		},
	});
</script>

<template>
	<div class="contain">
		<span class="level">{{ level }}</span>
	</div>
</template>

<style lang="scss" scoped>
	.contain {
		position: absolute;
		top: 1.5rem;
		right: 1rem;
		.level {
			background-color: var(--clr-primary-700);
			color: var(--clr-white);
			padding: 0.5rem;
			border-radius: 5px;
			font-size: 0.9rem;
		}
	}
</style>
