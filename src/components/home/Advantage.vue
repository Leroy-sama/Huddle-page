<script setup lang="ts">
	defineProps({
		icon: {
			type: Object,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="adv grid">
		<component :is="icon" class="adv__icon" />
		<h3 class="adv__head">{{ title }}</h3>
		<p class="adv__desc">{{ description }}</p>
	</div>
</template>

<style lang="scss" scoped>
	.adv {
		gap: 1rem;
		&__head {
			font-size: 1.5rem;
			color: var(--clr-offWhite);
		}
		&__desc {
			color: var(--clr-grayishBlue);
		}
	}
</style>
