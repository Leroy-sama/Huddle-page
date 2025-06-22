<script setup lang="ts">
	import Header from "./components/layout/Header.vue";
	import Footer from "./components/layout/Footer.vue";
</script>

<template>
	<Header />
	<RouterView v-slot="slotProps">
		<Transition name="route" mode="out-in">
			<component :is="slotProps.Component" />
		</Transition>
	</RouterView>
	<Footer />
</template>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	:root {
		--ff-primary: "Poppins", serif;
		--ff-secondary: "Newsreader", serif;

		--clr-bangaGreen: #035a53;
		--clr-primary-400: hsl(35 77% 62%);
		--clr-primary-700: hsl(5, 70%, 45%);
		--clr-white: hsl(0, 0%, 100%);
		--clr-lightWhite: #f4f4f4;

		--clr-offWhite: hsl(36, 100%, 99%);
		--clr-grayishBlue: hsl(233, 8%, 79%);
		--clr-darkGrayishBlue: hsl(236, 13%, 42%);
		--clr-veryDarkBlue: hsl(240, 100%, 5%);
		--clr-bgAdv: #050f13;
		--clr-lightGrey: #ccc;
	}

	* {
		margin: 0;
		padding: 0;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-family: var(--ff-primary);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--ff-secondary);
		line-height: 1.1;
		color: var(--clr-bgAdv);
		// font-weight: 400;
	}

	p {
		line-height: 1.6;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	img {
		width: 100%;
		display: block;
	}

	input,
	select,
	textarea,
	button {
		font: inherit;
	}

	// section {
	// 	animation: fade-in linear forwards;
	// 	animation-timeline: view();
	// 	animation-range-start: 400px;
	// 	animation-range-end: 600px;
	// }

	// section:first-child {
	// 	animation: none;
	// }

	@keyframes fade-in {
		from {
			scale: 0.8;
			opacity: 0;
		}
		to {
			scale: 1;
			opacity: 1;
		}
	}

	.wrapper {
		width: min(90%, 90rem);
		margin-inline: auto;
	}

	.flex {
		display: flex;
	}

	.grid {
		display: grid;
	}

	.route-enter-from {
		opacity: 0;
		transform: translateY(-30px);
	}
	.route-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
	.route-enter-active {
		transition: all 0.3s ease-out;
	}
	.route-leave-active {
		transition: all 0.3s ease-in;
	}
	.route-enter-to,
	.route-leave-from {
		opacity: 1;
		transform: translateY(0);
	}
</style>
