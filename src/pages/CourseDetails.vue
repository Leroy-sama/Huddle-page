<script setup lang="ts">
	import { computed, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import { useCourses } from "@/store/courses";

	const route = useRoute();
	const router = useRouter();
	const coursesStore = useCourses();

	const activeTab = ref("overview");

	const courseSlug = computed(() => route.params.slug as string);
	const course = computed(() =>
		coursesStore.getCourseBySlug(courseSlug.value)
	);

	// Redirect if course not found
	if (!course.value) {
		router.push("/courses");
	}

	const setActiveTab = (tab: string) => {
		activeTab.value = tab;
	};
</script>

<template>
	<main class="wrapper">
		<div class="course-details" v-if="course">
			<!-- Course Header -->
			<div class="course-header">
				<h1 class="course-title">{{ course.title }}</h1>
			</div>

			<!-- Course Content -->
			<div class="course-layout">
				<!-- Main Content -->
				<div class="course-main">
					<!-- Navigation Tabs -->
					<div class="course-tabs">
						<button
							:class="[
								'tab-button',
								{ active: activeTab === 'overview' },
							]"
							@click="setActiveTab('overview')"
						>
							Overview
						</button>
						<button
							:class="[
								'tab-button',
								{ active: activeTab === 'curriculum' },
							]"
							@click="setActiveTab('curriculum')"
						>
							Curriculum
						</button>
					</div>

					<!-- Tab Content -->
					<div class="tab-content">
						<!-- Overview Tab -->
						<div
							v-if="activeTab === 'overview'"
							class="overview-content"
						>
							<div class="module-section">
								<h2>Module Description</h2>
								<p class="module-description">
									{{ course.moduleDescription }}
								</p>
							</div>

							<div class="skills-section">
								<h2>What You'll Learn?</h2>
								<ul class="skills-list">
									<li
										v-for="skill in course.skills"
										:key="skill"
										class="skill-item"
									>
										<span class="checkmark">✓</span>
										{{ skill }}
									</li>
								</ul>
							</div>

							<div class="additional-info">
								<p>{{ course.deepDescription }}</p>
							</div>
						</div>

						<!-- Curriculum Tab -->
						<div
							v-else-if="activeTab === 'curriculum'"
							class="curriculum-content"
						>
							<h2>Course Curriculum</h2>
							<p>
								Coming soon! Our detailed curriculum will be
								available here.
							</p>
						</div>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="course-sidebar">
					<div class="module-summary">
						<h3>Module Summary:</h3>

						<div class="summary-item">
							<span class="icon">💰</span>
							<div class="summary-details">
								<span class="label">Price:</span>
								<span class="value price">{{
									course.price
								}}</span>
							</div>
						</div>

						<div class="summary-item">
							<span class="icon">⏱️</span>
							<div class="summary-details">
								<span class="label">Duration:</span>
								<span class="value">{{ course.duration }}</span>
							</div>
						</div>

						<div class="summary-item">
							<span class="icon">👥</span>
							<div class="summary-details">
								<span class="label">Age Group:</span>
								<span class="value">{{ course.ageGroup }}</span>
							</div>
						</div>

						<div class="summary-item">
							<span class="icon">📊</span>
							<div class="summary-details">
								<span class="label">Level:</span>
								<span class="value">{{
									course.courseLevel
								}}</span>
							</div>
						</div>

						<div class="summary-item">
							<span class="icon">🌐</span>
							<div class="summary-details">
								<span class="label">Language:</span>
								<span class="value">{{ course.language }}</span>
							</div>
						</div>

						<div class="summary-item">
							<span class="icon">🏆</span>
							<div class="summary-details">
								<span class="label">Certificate:</span>
								<span class="value">{{
									course.certificate
								}}</span>
							</div>
						</div>
					</div>

					<button class="enroll-btn">Enroll Now</button>
				</div>
			</div>
		</div>
		<div v-else>
			<h1>No course found</h1>
		</div>
	</main>
</template>

<style lang="scss" scoped>
	.course-details {
		min-height: 100vh;
		padding-block: 2rem;
	}

	.course-header {
		margin-bottom: 2rem;
	}

	.course-title {
		font-size: 2.5rem;
		font-weight: bold;
		color: var(--clr-bgAdv);
	}

	.course-layout {
		display: grid;
		grid-template-columns: 1fr 350px;
		gap: 3rem;
	}

	.course-main {
		background: transparent;
	}

	.course-tabs {
		display: flex;
		margin-bottom: 2rem;
		border-bottom: 1px solid #334155;
	}

	.tab-button {
		background: none;
		border: none;
		color: var(--clr-bgAdv);
		font-size: 1.1rem;
		padding: 1rem 2rem;
		cursor: pointer;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;

		&:hover {
			color: var(--clr-bangaGreen);
		}

		&.active {
			color: var(--clr-bangaGreen);
			border-bottom-color: var(--clr-bangaGreen);
		}
	}

	.tab-content {
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.module-section,
	.skills-section,
	.additional-info {
		margin-bottom: 2rem;
	}

	.module-section h2,
	.skills-section h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: var(--clr-bgAdv);
	}

	.module-description {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--clr-para);
	}

	.skills-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.skill-item {
		display: flex;
		align-items: flex-start;
		margin-bottom: 0.8rem;
		line-height: 1.5;
		color: var(--clr-para);
	}

	.checkmark {
		color: #22c55e;
		font-weight: bold;
		margin-right: 0.8rem;
		margin-top: 0.1rem;
		flex-shrink: 0;
	}

	.additional-info p {
		color: var(--clr-para);
		line-height: 1.6;
	}

	.course-sidebar {
		background: var(--clr-bgAdv);
		border-radius: 12px;
		padding: 1.5rem;
		height: fit-content;
		border: 1px solid #334155;
	}

	.module-summary h3 {
		font-size: 1.3rem;
		margin-bottom: 1.5rem;
		color: white;
	}

	.summary-item {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
		gap: 0.8rem;
	}

	.icon {
		font-size: 1.2rem;
		width: 24px;
		flex-shrink: 0;
	}

	.summary-details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.label {
		color: #94a3b8;
		font-size: 0.95rem;
	}

	.value {
		color: white;
		font-weight: 500;

		&.price {
			color: #f97316;
			font-weight: bold;
			font-size: 1.1rem;
		}
	}

	.enroll-btn {
		width: 100%;
		background: linear-gradient(
			135deg,
			var(--clr-primary-700),
			var(--clr-primary-700)
		);
		color: white;
		border: none;
		padding: 1rem;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		margin-top: 1.5rem;
		transition: all 0.3s ease;

		&:hover {
			transform: translateY(-2px);
		}
	}

	.curriculum-content {
		h2 {
			color: var(--clr-bgAdv);
			margin-bottom: 1rem;
		}

		p {
			color: var(--clr-para);
			font-size: 1.1rem;
		}
	}

	@media (max-width: 768px) {
		.course-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.course-title {
			font-size: 2rem;
		}

		.tab-button {
			padding: 0.8rem 1rem;
			font-size: 1rem;
		}

		.course-sidebar {
			order: -1;
		}
	}
</style>
