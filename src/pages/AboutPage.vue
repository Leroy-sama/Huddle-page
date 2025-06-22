<script setup lang="ts">
	import MissionIcon from "@/assets/icons/MissionIcon.vue";
	import HireCta from "@/components/UI/HireCta.vue";
	import SpanTitle from "@/components/UI/SpanTitle.vue";
</script>

<template>
	<main>
		<section class="intro">
			<div class="wrapper">
				<div class="intro__wrap grid">
					<div class="content grid">
						<div class="content-intro">
							<SpanTitle title="about us" />
							<h1 class="intro__head">We teach the good stuff</h1>
							<p class="intro__text">
								Fuzu EdTech Company was founded with a vision to
								revolutionize education by integrating
								technology into daily learning. We are committed
								to providing high-quality, affordable, and
								accessible education in coding, digital
								literacy, robotics, and language skills. Our
								team of expert instructors is dedicated to
								delivering exceptional education and ensuring
								that every learner achieves their full
								potential.
							</p>
						</div>
						<div class="mission grid">
							<div class="mission-head flex">
								<MissionIcon />
								<h2>Our Mission</h2>
							</div>
							<p>
								Empowering learners with the skills they need to
								succeed in a technology-driven world.
							</p>
						</div>
					</div>
					<div class="images grid">
						<!-- <div class="img1">
							<img src="../assets/images/about-img1.jpg" alt="" />
						</div> -->
						<div class="img2">
							<img src="../assets/images/about-img2.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="team">
			<div class="wrapper">
				<div class="team__wrap">
					<span class="intro-span">The Team</span>
					<h2 class="team__head">
						Expert instructors ensuring that every learner achieves
						their full potential.
					</h2>
					<div class="team-members grid">
						<div class="member">
							<img src="../assets/images/timo-img.jpg" alt="" />
							<div class="member-deets">
								<p class="member-name">Timothy</p>
								<span class="member-title">
									Robotics & ICT Trainer
								</span>
							</div>
						</div>
						<div class="member">
							<img
								src="../assets/images/teacher-leroy.jpg"
								alt=""
							/>
							<div class="member-deets">
								<p class="member-name">Leroy</p>
								<span class="member-title">
									ICT & Coding Trainer
								</span>
							</div>
						</div>
						<div class="member">
							<img
								src="../assets/images/teacher-joan.jpg"
								alt=""
							/>
							<div class="member-deets">
								<p class="member-name">Joan</p>
								<span class="member-title">
									Chinese & French Trainer
								</span>
							</div>
						</div>
						<div class="member">
							<img
								src="../assets/images/teacher-mike.jpg"
								alt=""
							/>
							<div class="member-deets">
								<p class="member-name">Michael</p>
								<span class="member-title">
									ICT & French Trainer
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<HireCta />
	</main>
</template>

<style lang="scss" scoped>
	.intro {
		padding: 3rem 0;

		&__wrap {
			gap: 2rem;

			@media (min-width: 1024px) {
				grid-template-columns: 1fr 1fr;
				align-items: center;
			}

			.content {
				gap: 1rem;
				.content-intro {
					.intro-span {
						color: var(--clr-primary-700);
						text-transform: uppercase;
					}
					.intro__head {
						font-size: 2.5rem;
						color: var(--clr-bgAdv);
						padding: 1rem 0;
					}
				}
				.mission {
					gap: 1rem;
					padding: 1.5rem;
					background-color: var(--clr-bgAdv);
					.mission-head {
						align-items: center;
						gap: 1rem;
						h2 {
							color: var(--clr-offWhite);
						}
					}
					p {
						color: var(--clr-offWhite);
					}
				}
			}
		}
	}
	.team {
		padding: 3rem 0;

		&__wrap {
			.intro-span {
				color: var(--clr-primary-700);
				text-transform: uppercase;
			}
			.team__head {
				font-size: 2.5rem;
				// text-align: center;
				color: var(--clr-bgAdv);
				padding: 1rem 0;
			}

			.team-members {
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				gap: 1.5rem;
				.member {
					border: 1px solid var(--clr-lightGrey);
					// padding: 1rem;
					img {
						aspect-ratio: 1/1;
						object-fit: cover;
					}

					.member-deets {
						padding: 1rem;
						.member-name {
							font-size: 1.2rem;
							font-weight: 600;
						}
						.member-title {
							font-size: 0.95rem;
						}
					}
				}
			}
		}
	}
</style>
