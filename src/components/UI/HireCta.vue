<template>
	<section class="cta">
		<div class="wrapper">
			<div class="cta__wrap grid">
				<div class="question">
					<h2 class="cta__head">
						Ready to invest in your child's future?
					</h2>
					<p class="cta__desc">
						Invest in your childs future today with top tech skills
						that will be very significant today and in the future.
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
					color: var(--clr-grayishBlue);
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
					transition: transform 0.2s ease-in-out;

					&:hover {
						transform: translateY(-3px);
					}
				}
			}
		}
	}
</style>
