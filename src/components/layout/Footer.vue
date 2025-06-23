<template>
	<footer class="footer">
		<div class="wrapper">
			<RouterLink to="/" class="logo">FuzuEdTech</RouterLink>
			<div class="footer__wrap grid">
				<div class="footer__text">
					<p>
						FUZU EDTECH COMPANY | Empowering learners with
						technology and language skills. Join us in shaping the
						future of education. Contact us: info@fuzuedtech.com |
						All rights reserved.
					</p>
				</div>
				<div class="footer__links">
					<h3>Company</h3>
					<ul class="grid">
						<li><RouterLink to="/about">About Us</RouterLink></li>
						<li>
							<RouterLink to="/courses">Services</RouterLink>
						</li>
						<li><RouterLink to="/contact">Contact</RouterLink></li>
					</ul>
				</div>
				<div class="footer__links">
					<h3>Contact Us</h3>
					<div class="contacts grid">
						<div class="contact-email flex">
							<EmailIcon />
							<a href="mailto:ntruderleroy@gmail.com"
								>info@fuzuedtech.com</a
							>
						</div>
						<div class="contact-phone flex">
							<PhoneIcon />
							<a href="tel:+254791434211">+254791434211</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import EmailIcon from "@/assets/icons/EmailIcon.vue";
	import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
</script>

<style lang="scss" scoped>
	.footer {
		background-color: var(--clr-bgAdv);
		padding: 2rem 0;

		.logo {
			font-size: 2rem;
			color: var(--clr-primary-700);
			font-family: var(--ff-secondary);
			font-weight: 700;
		}
		&__wrap {
			gap: 2rem;
			@media (min-width: 1024px) {
				grid-template-columns: 50% 25% 25%;
			}
			.footer__text {
				p {
					color: var(--clr-offWhite);
					padding: 1rem 0;
				}
			}
			.footer__links {
				h3 {
					color: var(--clr-white);
					padding: 1rem 0;
					font-size: 1.5rem;
				}

				ul {
					gap: 1rem;
					li a {
						color: var(--clr-offWhite);
						&:hover {
							color: var(--clr-primary-700);
						}
					}
				}
				.contacts {
					gap: 1rem;
					.contact-email {
						align-items: center;
						gap: 0.5rem;
						a {
							color: var(--clr-offWhite);
							&:hover {
								color: var(--clr-primary-700);
							}
						}
					}
					.contact-phone {
						align-items: center;
						gap: 0.5rem;
						a {
							color: var(--clr-offWhite);
							&:hover {
								color: var(--clr-primary-700);
							}
						}
					}
				}
			}
		}
	}
</style>
