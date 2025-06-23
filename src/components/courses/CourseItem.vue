<script setup lang="ts">
	import { RouterLink } from "vue-router";
	import Level from "../UI/Level.vue";

	defineProps(["image", "title", "description", "level", "courseSlug"]);
</script>

<template>
	<div class="service">
		<RouterLink :to="`/courses/${courseSlug}`">
			<img :src="image" :alt="title" />
		</RouterLink>
		<div class="service__deets grid">
			<Level :level="level" />
			<RouterLink :to="`/courses/${courseSlug}`">
				<h2 class="service__deets-head">{{ title }}</h2>
			</RouterLink>
			<p class="service__deets-desc">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.service {
		background: var(--clr-betGrey);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
		position: relative;
		img {
			aspect-ratio: 4/3;
			object-fit: cover;
		}
		&__deets {
			padding: 1.5rem;
			gap: 1rem;
			.level {
				background-color: var(--clr-primary-700);
				color: var(--clr-white);
				padding: 0.5rem;
				border-radius: 5px;
			}
			h2 {
				color: var(--clr-veryDarkBlue);
			}
		}
	}
</style>
