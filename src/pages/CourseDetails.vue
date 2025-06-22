<script setup lang="ts">
	import TickIcon from "@/assets/icons/TickIcon.vue";
</script>

<template>
	<main>
		<div class="wrapper">
			<h1>Website Dev For Kids</h1>
			<section class="overview">
				<h2 class="overview__head">Course Description</h2>
				<p class="overview__description">
					In this course, you will learn the basics of game
					development using Python, including how to create game
					graphics, implement game logic, and add sound effects. By
					the end of the course, you will have created your own fully
					functional game using the Pygame library. This course is
					ideal for students who already have some programming
					experience and want to explore game development. By the end
					of the course, you will have a solid understanding of the
					Python programming language and be able to create your own
					games.
				</p>
				<div class="learning">
					<h2>What You Will Learn</h2>
					<div class="skills">
						<div class="skill">
							<TickIcon />
							<p>Basics of the Python Programming language</p>
						</div>
						<div class="skill">
							<TickIcon />
							<p>Basics of the Python Programming language</p>
						</div>
						<div class="skill">
							<TickIcon />
							<p>Basics of the Python Programming language</p>
						</div>
						<div class="skill">
							<TickIcon />
							<p>Basics of the Python Programming language</p>
						</div>
						<div class="skill">
							<TickIcon />
							<p>Basics of the Python Programming language</p>
						</div>
					</div>
				</div>
			</section>
			<aside>
				<h2>Course Includes</h2>
			</aside>
		</div>
	</main>
</template>

<style lang="scss" scoped>
	main {
		h1 {
		}

		.overview {
			.learning {
				.skills {
					.skill {
						display: flex;
						align-items: center;
						gap: 0.5rem;
					}
				}
			}
		}
	}
</style>
