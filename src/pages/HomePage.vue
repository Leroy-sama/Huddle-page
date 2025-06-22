<script setup lang="ts">
	import { useAdsStore } from "@/store/advantages";
	import JoinUs from "@/assets/icons/JoinUs.vue";
	import Advantage from "@/components/home/Advantage.vue";
	import WebDev from "@/assets/icons/WebDev.vue";
	import Robotics from "@/assets/icons/Robotics.vue";
	import Languages from "@/assets/icons/Languages.vue";
	import GameDev from "@/assets/icons/GameDev.vue";
	import SpanTitle from "@/components/UI/SpanTitle.vue";

	const adsStore = useAdsStore();
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
					<SpanTitle title="categories" />
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
		<section class="lastcta">
			<div class="wrapper">
				<div class="lastcta__wrap grid">
					<div class="content-text grid">
						<div class="span flex">
							<JoinUs />
							<SpanTitle title="Direct Inquiry" />
						</div>
						<h2 class="lastcta__head">Join Us Today</h2>
						<p class="lastcta__desc">
							Join Us Today! Experience the innovative learning
							and teaching at FUZU EDTECH. Partner with us to
							empower learners with cutting-edge skills and
							knowledge. Let's shape the future of education
							together!
						</p>
						<div class="lastcta__link">
							<RouterLink to="/contact" class="contact"
								>Contact Us</RouterLink
							>
						</div>
					</div>
					<div class="content-img">
						<img src="../assets/images/join-us.jpg" alt="" />
					</div>
				</div>
			</div>
		</section>
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

								&:hover {
								}
							}
						}
					}
				}
			}
		}

		.category {
			padding-block: 2rem;

			&__wrap {
				.ads-us {
					color: var(--clr-primary-700);
					text-transform: uppercase;
				}

				.category__head {
					font-size: 2.5rem;
					padding-block: 0.75rem;
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
					padding-top: 1rem;
				}

				.advantages__content {
					gap: 2rem;
					padding: 2rem 0;
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
				}
			}
		}
		.lastcta {
			padding: 3rem 0;

			&__wrap {
				gap: 1rem;

				.content-text {
					gap: 1rem;
				}

				@media (min-width: 1024px) {
					grid-template-columns: 1fr 1fr;
					align-items: center;
				}
				.span {
					align-items: center;
					gap: 0.5rem;
				}

				.lastcta-us {
					justify-content: center;
					text-transform: uppercase;
				}

				.lastcta__head {
					font-size: 2.5rem;
					color: var(--clr-veryDarkBlue);
					// padding: 1rem 0;
				}

				.lastcta__link {
					padding: 1rem 0;

					.contact {
						color: var(--clr-white);
						padding: 0.8rem 1.5rem;
						border: 1px solid var(--clr-primary-700);
						background-color: var(--clr-primary-700);
						transition: 0.3s ease;

						&:hover {
							color: var(--clr-white);
							border: 1px solid var(--clr-primary-700);
							background-color: var(--clr-primary-700);
						}
					}
				}

				.content-img {
					img {
						border-radius: 10px;
					}
				}
			}
		}
	}
</style>
