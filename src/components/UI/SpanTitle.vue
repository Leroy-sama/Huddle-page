<script setup lang="ts">
	defineProps({
		title: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<span>{{ title }}</span>
</template>

<style lang="scss" scoped>
	span {
		color: var(--clr-primary-700);
		text-transform: uppercase;
	}
</style>
