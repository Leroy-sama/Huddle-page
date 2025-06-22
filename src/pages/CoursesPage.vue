<script setup lang="ts">
	import { useCourses } from "@/store/courses";

	import Hire from "@/components/UI/HireCta.vue";
	import CourseItem from "@/components/courses/CourseItem.vue";

	const courses = useCourses();
</script>

<template>
	<main>
		<section class="services">
			<div class="wrapper">
				<div class="services__wrap">
					<div class="header grid">
						<span class="title-span">Our Courses</span>
						<h1 class="services__head">What do we do?</h1>
						<p class="services__desc">
							Empower Young Minds! Our innovative programs offer
							Robotics Training for Kids and engaging French &
							Chinese Classes. Our hands-on teaching approach,
							enriched with projects, ensures students gain
							practical skills and global language proficiency.
							Partner with us to inspire the next generation of
							thinkers and leaders. Let's shape the future of
							education together.
						</p>
					</div>
					<div class="services__items grid">
						<CourseItem
							v-for="(course, index) in courses.courses"
							:key="index"
							:title="course.title"
							:image="course.image"
							:description="course.description"
						/>
					</div>
				</div>
			</div>
		</section>
		<Transition>
			<Hire />
		</Transition>
	</main>
</template>

<style lang="scss" scoped>
	main {
		.services {
			&__wrap {
				.header {
					padding: 2rem 0;
					gap: 0.5rem;
					.title-span {
						color: var(--clr-primary-700);
						text-transform: uppercase;
					}

					.services__head {
						color: var(--clr-bgAdv);
						font-size: 2.5rem;
					}
				}
				.services__items {
					padding: 2rem 0;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: 1.5rem;
				}
			}
		}
		.v-enter-from {
			opacity: 0;
			transform: translateY(30px);
		}
		.v-enter-active {
			transition: all 0.3s ease-out;
		}
		.v-enter-to {
			opacity: 1;
			transform: translateY(0);
		}

		.v-leave-from {
		}

		.v-leave-active {
		}
		.v-leave-to {
		}
	}
</style>
