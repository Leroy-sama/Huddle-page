<script setup lang="ts">
	import { useAdsStore } from "@/store/advantages";
	import { useCourses } from "@/store/courses";
	import Advantage from "@/components/home/Advantage.vue";
	import WebDev from "@/assets/icons/WebDev.vue";
	import Robotics from "@/assets/icons/Robotics.vue";
	import Languages from "@/assets/icons/Languages.vue";
	import GameDev from "@/assets/icons/GameDev.vue";
	import SpanTitle from "@/components/UI/SpanTitle.vue";
	import HireCta from "@/components/UI/HireCta.vue";

	const adsStore = useAdsStore();
	const courses = useCourses();
</script>

<template>
	<main>
		<section class="hero flex">
			<div class="wrapper">
				<div class="hero__wrap grid">
					<h1 class="hero__head">Welcome to Fuzu EdTech</h1>
					<p class="hero__desc">
						Where we nurture the future generation on technology and
						important skills
					</p>
					<div class="hero__actions flex">
						<RouterLink to="/about" class="about"
							>Learn More</RouterLink
						>
						<RouterLink to="/contact" class="contact"
							>Contact Us</RouterLink
						>
					</div>
				</div>
			</div>
		</section>
		<section class="about">
			<div class="wrapper">
				<div class="about__wrap">
					<SpanTitle class="about-us" title="about us" />
					<h2 class="about__head">Who are we?</h2>
					<div class="about__content grid">
						<div class="about__image">
							<img
								src="../assets/images/student-img2.jpg"
								alt=""
							/>
						</div>
						<div class="about__text flex">
							<p>
								Welcome to FUZU EDTECH! Founded in 2023, we are
								an education technology company with a vision to
								empower learners with technology and language
								skills in a fun and engaging way. By integrating
								learning with technology, we complement
								traditional education and make it more
								accessible, affordable, and enjoyable. Our main
								objective is to ensure no one is left behind in
								our engaging learning programs. We partner with
								educational institutions that are ready to
								inspire and incorporate technology into their
								daily learning. Our programs are customized to
								meet the unique needs of our partners, ensuring
								every learner thrives. Join us in shaping the
								future of education
							</p>
							<div class="btn-link flex">
								<RouterLink to="/about" class="about-link"
									>Learn More</RouterLink
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="category">
			<div class="wrapper">
				<div class="category__wrap">
					<SpanTitle class="ads-us" title="categories" />
					<h2 class="category__head">
						Creative, Experiential, Modular STEM Classes
					</h2>
					<div class="cats">
						<div class="cat">
							<div class="icon">
								<Robotics />
							</div>
							<h3>Robotics</h3>
						</div>
						<div class="cat">
							<div class="icon">
								<WebDev />
							</div>
							<h3>Web Development</h3>
						</div>
						<div class="cat">
							<div class="icon">
								<Languages />
							</div>
							<h3>Languages</h3>
						</div>
						<div class="cat">
							<div class="icon">
								<GameDev />
							</div>
							<h3>Game Development</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="advantages">
			<div class="wrapper">
				<div class="advantages__wrap">
					<SpanTitle class="ads-us" title="why choose us" />
					<h2 class="advantages__head">
						Commited to delivering top-tier customer experiences
					</h2>
					<div class="advantages__content grid">
						<Advantage
							v-for="(ad, index) in adsStore.ads"
							:key="index"
							:icon="ad.icon"
							:title="ad.title"
							:description="ad.description"
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="popular">
			<div class="wrapper">
				<div class="popular__wrap">
					<SpanTitle class="span-center" title="popular courses" />
					<h2>Pick a course to get started</h2>
					<div class="courses">
						<div
							class="course"
							v-for="course in courses.courses.slice(0, 4)"
						>
							<RouterLink :to="`/courses/${course.slug}`">
								<img :src="course.image" alt="" />
							</RouterLink>
							<div>
								<span class="price">{{ course.price }}</span>
								<RouterLink :to="`/courses/${course.slug}`">
									<h3>{{ course.title }}</h3>
								</RouterLink>
								<span class="lessons">
									{{ course.duration }}
								</span>
							</div>
						</div>
					</div>
					<div class="btn-link">
						<RouterLink to="/courses">All Courses</RouterLink>
					</div>
				</div>
			</div>
		</section>
		<HireCta />
	</main>
</template>

<style lang="scss" scoped>
	main {
		.hero {
			background: url(../assets/images/new-hero.jpg);
			background-position: right;
			background-repeat: no-repeat;
			background-size: cover;
			min-height: 100vh;
			border-image: linear-gradient(
					hsl(240 100% 20%/ 0.6),
					hsl(0 100% 20% / 0.6)
				)
				fill 1;

			align-items: center;

			&__wrap {
				gap: 1.5rem;
				justify-items: center;
				.hero__head {
					font-size: 2.5rem;
					color: var(--clr-white);
				}
				.hero__desc {
					font-size: 1.15rem;
					color: var(--clr-lightWhite);
				}
				.hero__actions {
					gap: 1rem;

					.about {
						color: var(--clr-lightWhite);
						padding: 0.8rem 1.5rem;
						border: 1px solid var(--clr-white);
						transition: 0.3s ease;

						&:hover {
							color: var(--clr-primary-700);
							border: 1px solid var(--clr-primary-700);
						}
					}
					.contact {
						color: var(--clr-primary-700);
						padding: 0.8rem 1.5rem;
						border: 1px solid var(--clr-lightWhite);
						background-color: var(--clr-lightWhite);
						transition: 0.3s ease;
						font-weight: 500;

						&:hover {
							color: var(--clr-lightWhite);
							border: 1px solid var(--clr-primary-700);
							background-color: var(--clr-primary-700);
						}
					}
				}
			}
		}
		.about {
			padding: 3rem 0;

			&__wrap {
				.about-us {
					display: flex;
					justify-content: center;
				}
				.about__head {
					font-size: 2.5rem;
					color: var(--clr-veryDarkBlue);
					text-align: center;
					position: relative;

					&::after {
						content: "";
						position: absolute;
						bottom: -10px;
						left: 50%;
						transform: translateX(-50%);
						width: 150px;
						height: 4px;
						background: linear-gradient(
							45deg,
							var(--clr-primary-700),
							#8b5cf6
						);
						border-radius: 2px;
					}
				}
				.about__content {
					gap: 2rem;
					padding: 2rem 0;

					@media (min-width: 1024px) {
						grid-template-columns: 1fr 1fr;
					}

					.about__image {
						img {
							aspect-ratio: 4/3;
							object-fit: cover;
							border-radius: 10px;
						}
					}

					.about__text {
						flex-direction: column;
						align-items: start;
						gap: 1rem;
						.btn-link {
							.about-link {
								padding: 0.8rem 1.5rem;

								color: var(--clr-white);
								border: 1px solid var(--clr-primary-700);
								background-color: var(--clr-primary-700);
								transition: 0.3s ease;
								border-radius: 8px;

								&:hover {
									transform: translateY(-2px);
								}
							}
						}
					}
				}
			}
		}

		.category {
			padding-block: 4rem;

			&__wrap {
				.ads-us {
					display: flex;
					justify-content: center;
				}

				.category__head {
					font-size: 2.5rem;
					padding-block: 0.75rem;
					text-align: center;
					position: relative;

					&::after {
						content: "";
						position: absolute;
						bottom: -10px;
						left: 50%;
						transform: translateX(-50%);
						width: 150px;
						height: 4px;
						background: linear-gradient(
							45deg,
							var(--clr-primary-700),
							#8b5cf6
						);
						border-radius: 2px;
					}
				}

				.cats {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
					gap: 2rem;
					padding-block: 1.5rem;

					.cat {
						display: grid;
						gap: 1rem;
						justify-items: center;
						background-color: #f4f4f4;
						padding: 2rem;
						.icon {
							border: 1px solid #bbd6f5;
							padding: 1rem;
							border-radius: 50%;
							background-color: #bbd6f5;
						}

						h3 {
							font-size: 1.25rem;
							font-family: var(--ff-primary);
							font-weight: 500;
						}
					}
				}
			}
		}

		.advantages {
			background-color: var(--clr-bgAdv);
			padding: 2rem 0;

			&__wrap {
				.ads-us {
					text-transform: uppercase;
					display: flex;
					justify-content: center;
				}
				.advantages__head {
					font-size: 2.5rem;
					color: var(--clr-white);
					text-align: center;
				}

				.advantages__content {
					gap: 2rem;
					padding: 2rem 0;
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				}
			}
		}

		.popular {
			padding-block: 5rem;
			background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

			&__wrap {
				max-width: 1200px;
				margin: 0 auto;
				padding: 0 2rem;

				.span-center {
					display: flex;
					justify-content: center;
					margin-bottom: 1rem;
				}

				h2 {
					font-size: 2.8rem;
					font-weight: 700;
					color: var(--clr-bgAdv);
					text-align: center;
					padding-top: 1rem;
					margin-bottom: 3rem;
					position: relative;

					&::after {
						content: "";
						position: absolute;
						bottom: -10px;
						left: 50%;
						transform: translateX(-50%);
						width: 80px;
						height: 4px;
						background: linear-gradient(
							45deg,
							var(--clr-primary-700),
							#8b5cf6
						);
						border-radius: 2px;
					}
				}

				.courses {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
					gap: 2.5rem;
					margin-bottom: 4rem;

					.course {
						display: grid;
						gap: 1.5rem;
						align-items: center;
						background: white;
						border-radius: 16px;
						padding: 1.5rem;
						box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
						border: 1px solid rgba(255, 255, 255, 0.2);
						transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
						position: relative;
						overflow: hidden;

						// Subtle gradient overlay
						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							height: 4px;
							background: linear-gradient(
								45deg,
								var(--clr-primary-700),
								#8b5cf6,
								#ec4899
							);
							border-radius: 16px 16px 0 0;
						}

						&:hover {
							transform: translateY(-8px);
							box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
							border-color: rgba(59, 130, 246, 0.3);
						}

						@media (min-width: 768px) {
							grid-template-columns: 200px 1fr;
							gap: 2rem;
						}

						@media (max-width: 767px) {
							min-width: 300px;
							text-align: center;
						}

						a {
							text-decoration: none;
							transition: all 0.3s ease;

							&:hover {
								transform: scale(1.02);
							}
						}

						img {
							width: 100%;
							height: 150px;
							aspect-ratio: 4/3;
							object-fit: cover;
							border-radius: 12px;
							transition: all 0.3s ease;

							@media (min-width: 768px) {
								height: 120px;
							}

							&:hover {
								transform: scale(1.05);
								box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
							}
						}

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.8rem;
							align-items: flex-start;

							@media (max-width: 767px) {
								align-items: center;
							}
						}

						.price {
							background: linear-gradient(
								135deg,
								#f97316,
								#ea580c
							);
							color: white;
							padding: 0.4rem 1rem;
							border-radius: 20px;
							font-weight: 600;
							font-size: 0.9rem;
							letter-spacing: 0.5px;
							box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
							transition: all 0.3s ease;

							&:hover {
								transform: translateY(-2px);
								box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
							}
						}

						h3 {
							color: var(--clr-bgAdv);
							font-size: 1.4rem;
							font-weight: 600;
							line-height: 1.3;
							margin: 0;
							transition: color 0.3s ease;

							&:hover {
								color: var(--clr-primary-700);
							}

							@media (max-width: 767px) {
								text-align: center;
							}
						}

						.lessons {
							color: #64748b;
							font-size: 0.95rem;
							font-weight: 500;
							display: flex;
							align-items: center;
							gap: 0.5rem;
							background: #f1f5f9;
							padding: 0.3rem 0.8rem;
							border-radius: 12px;
							border: 1px solid #e2e8f0;

							&::before {
								content: "📚";
								font-size: 0.9rem;
							}
						}
					}
				}

				// "All Courses" link styling
				.btn-link {
					display: flex;
					justify-content: center;
					> a {
						display: inline-flex;
						align-items: center;
						justify-content: center;
						gap: 0.5rem;
						background-color: var(--clr-primary-700);
						color: white;
						text-decoration: none;
						padding: 1rem 2.5rem;
						font-weight: 600;
						transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
						position: relative;
						overflow: hidden;
						border-radius: 8px;

						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: -100%;
							width: 100%;
							height: 100%;
							background: linear-gradient(
								90deg,
								transparent,
								rgba(255, 255, 255, 0.2),
								transparent
							);
							transition: left 0.6s ease;
						}

						&:hover {
							transform: translateY(-3px);
							box-shadow: 0 15px 45px rgba(59, 130, 246, 0.4);

							&::before {
								left: 100%;
							}

							&::after {
								transform: translateX(5px);
							}
						}

						&::after {
							content: "->";
							font-size: 1.2rem;
							transition: transform 0.3s ease;
						}
					}
				}
			}
		}

		// Responsive adjustments
		@media (max-width: 1024px) {
			.popular__wrap .courses {
				grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			}
		}

		@media (max-width: 768px) {
			.popular {
				padding-block: 3rem;

				&__wrap {
					padding: 0 1rem;

					h2 {
						font-size: 2.2rem;
					}

					.courses {
						grid-template-columns: 1fr;
						gap: 1.5rem;

						.course {
							padding: 1.2rem;
							min-width: unset;
						}
					}
				}
			}
		}

		@media (max-width: 480px) {
			.popular__wrap {
				h2 {
					font-size: 1.8rem;
				}

				.courses .course {
					h3 {
						font-size: 1.2rem;
					}
				}
			}
		}
	}
</style>
