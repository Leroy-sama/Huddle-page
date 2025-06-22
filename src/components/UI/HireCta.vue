<template>
	<section class="cta">
		<div class="wrapper">
			<div class="cta__wrap grid">
				<div class="question">
					<h2 class="cta__head">Hire us now?</h2>
					<p class="cta__desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Rem ad expedita aspernatur accusamus labore explicabo
						reiciendis laboriosam perspiciatis ipsum consectetur.
					</p>
				</div>
				<div class="answer flex">
					<RouterLink to="/contact">Contact Us</RouterLink>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.cta {
		padding: 2rem 0;

		&__wrap {
			background-color: var(--clr-bgAdv);
			align-items: center;
			gap: 2rem;
			padding: 2rem;
			.question {
				.cta__head {
					font-size: 2.5rem;
					color: var(--clr-white);
					padding: 1rem 0;
					text-align: center;
				}
				.cta__desc {
					color: var(--clr-offWhite);
					text-align: center;
				}
			}
			.answer {
				justify-content: center;
				a {
					border: 1px solid var(--clr-primary-700);
					color: var(--clr-white);
					background-color: var(--clr-primary-700);
					padding: 0.75rem 1.5rem;
				}
			}
		}
	}
</style>
