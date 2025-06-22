<script lang="ts" setup>
	import { reactive } from "vue";

	const state = reactive({
		isOpen: false,
	});

	const toggleMenu = () => {
		state.isOpen = !state.isOpen;
	};

	const closeNavMenu = () => {
		state.isOpen = false;
	};
</script>

<template>
	<header>
		<nav class="flex">
			<RouterLink to="/" class="logo">FuzuEdTech</RouterLink>
			<ul class="flex" :class="{ active: state.isOpen }" role="menubar">
				<li role="none">
					<RouterLink
						@click.native="closeNavMenu"
						to="/"
						role="menuitem"
						>Home</RouterLink
					>
				</li>
				<li role="none">
					<RouterLink
						@click.native="closeNavMenu"
						to="/about"
						role="menuitem"
						>About</RouterLink
					>
				</li>
				<li role="none">
					<RouterLink
						@click.native="closeNavMenu"
						to="/courses"
						role="menuitem"
						>courses</RouterLink
					>
				</li>
				<li role="none">
					<RouterLink
						@click.native="closeNavMenu"
						to="/shop"
						role="menuitem"
						>Shop</RouterLink
					>
				</li>
				<li role="none">
					<RouterLink
						@click.native="closeNavMenu"
						to="/contact"
						role="menuitem"
						>Contact</RouterLink
					>
				</li>
			</ul>
			<button
				class="burger"
				:class="{ active: state.isOpen }"
				@click="toggleMenu"
				:aria-expanded="state.isOpen"
				aria-label="Toggle menu"
				aria-controls="navigation-menu"
			>
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	header {
		padding: 1rem 2rem;
		border-bottom: 1px solid var(--clr-veryDarkBlue);
		nav {
			justify-content: space-between;
			align-items: center;

			.logo {
				font-size: 2rem;
				color: var(--clr-primary-700);
				font-family: var(--ff-secondary);
				font-weight: 700;
			}
			ul {
				gap: 1.5rem;
				position: fixed;
				z-index: 1000;
				inset: 0 0 0 30%;
				flex-direction: column;
				gap: 2rem;
				padding: min(30vh, 10rem) 2em;
				background-color: white;
				transform: translateX(100%);
				transition: 0.5s;

				&.active {
					transform: translateX(0);
				}

				@media (min-width: 768px) {
					transform: translateX(0);
					position: static;
					flex-direction: row;
					align-items: center;
					padding: 0;
				}

				li a {
					color: var(--clr-veryDarkBlue);
					text-transform: uppercase;
					transition: 0.2s ease-in;

					&:hover {
						color: var(--clr-primary-700);
					}
				}
			}
			.burger {
				cursor: pointer;
				background: none;
				border: none;
				z-index: 1111;

				@media (min-width: 768px) {
					display: none;
				}

				.bar {
					display: block;
					width: 30px;
					height: 3px;
					margin: 5px;
					background-color: black;
					-webkit-transition: all 0.3s ease-in-out;
					transition: all 0.3s ease-in-out;
				}
				&.active {
					.bar {
						&:nth-child(2) {
							opacity: 0;
						}
						&:nth-child(1) {
							transform: translateY(8px) rotate(45deg);
						}
						&:nth-child(3) {
							transform: translateY(-8px) rotate(-45deg);
						}
					}
				}
			}
		}
	}
</style>
