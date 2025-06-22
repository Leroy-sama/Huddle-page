<script setup lang="ts">
	import EmailIcon from "@/assets/icons/EmailIcon.vue";
	import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
	import Modal from "@/components/UI/Modal.vue";
	import { reactive, ref } from "vue";

	interface Input {
		isValid: boolean;
	}

	const name = reactive({
		isValid: true,
		value: "",
	});

	const email = reactive({
		isValid: true,
		value: "",
	});

	const message = reactive({
		isValid: true,
		value: "",
	});

	const formIsValid = ref(true);

	const validateEmail = (email: string) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const submitForm = () => {
		formIsValid.value = true;

		if (name.value === "") {
			name.isValid = false;
			formIsValid.value = false;
		}

		if (!validateEmail(email.value)) {
			email.isValid = false;
			formIsValid.value = false;
		}

		if (message.value === "") {
			message.isValid = false;
			formIsValid.value = false;
		}

		if (formIsValid.value) {
			console.log("form is valid --  proceed");

			const formData = {
				senderName: name.value,
				senderEmail: email.value,
				senderMessage: message.value,
			};

			name.value = "";
			email.value = "";
			message.value = "";

			console.log(formData);
		} else {
			console.log("form isnot valid - don't sned");
		}
	};

	const clearValidity = (input: Input) => {
		input.isValid = true;
	};
</script>

<template>
	<main class="contact">
		<section class="contact-form">
			<div class="wrapper">
				<div class="form-wrap grid">
					<div class="touch">
						<span>Contact Us</span>
						<h2 class="touch__head">
							Get In Touch with us anytime
						</h2>
						<p class="touch__text">
							Feel free to reach out to us at any time. We are
							here to help.
						</p>
						<div class="touch__items grid">
							<div class="item flex">
								<div class="icon">
									<PhoneIcon
										width="48"
										height="48"
										fill="var(--clr-bangaGreen)"
									/>
								</div>
								<div class="item-deets">
									<h3>Phone Number</h3>
									<a href="tel:123-456-7890"
										>+254 742765488</a
									>
								</div>
							</div>
							<div class="item flex">
								<div class="icon">
									<EmailIcon
										width="48"
										height="48"
										fill="var(--clr-bangaGreen)"
									/>
								</div>
								<div class="item-deets">
									<h3>Email Address</h3>
									<a href="mailto:info@fuzuedtech.com"
										>info@fuzuedtech.com</a
									>
								</div>
							</div>
						</div>
					</div>
					<div class="message">
						<h2 class="message__head">Send Us a Message</h2>
						<form
							class="message__form grid"
							@submit.prevent="submitForm"
						>
							<div
								class="form-control grid"
								:class="{ invalid: !name.isValid }"
							>
								<label for="name">Name</label>
								<input
									type="text"
									placeholder="Name"
									v-model="name.value"
									@blur="clearValidity(name)"
								/>
								<p class="err-msg" v-if="!name.isValid">
									Name field cannot be empty
								</p>
							</div>
							<div
								class="form-control grid"
								:class="{ invalid: !email.isValid }"
							>
								<label for="email">Email</label>
								<input
									type="email"
									placeholder="Email"
									v-model="email.value"
									@blur="clearValidity(email)"
								/>
								<p class="err-msg" v-if="!email.isValid">
									Please provide a valid email
								</p>
							</div>
							<div
								class="form-control grid"
								:class="{ invalid: !message.isValid }"
							>
								<label for="message">Message</label>
								<textarea
									name=""
									id=""
									rows="5"
									placeholder="Message"
									v-model="message.value"
									@blur="clearValidity(message)"
								></textarea>
								<p class="err-msg" v-if="!message.isValid">
									Message field cannot be empty
								</p>
							</div>
							<div class="form-control">
								<button type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	.contact {
		.contact-header {
			padding: 3rem 0;
			.header__wrap {
				.header__head {
					font-size: 2.5rem;
					color: var(--clr-bgAdv);
					padding: 1rem 0;
				}
			}
		}
		.contact-form {
			padding: 4rem 0;
			background-color: var(--clr-betGrey);

			.form-wrap {
				span {
					text-transform: uppercase;
					color: var(--clr-primary-700);
				}
				gap: 2rem;

				@media (min-width: 1024px) {
					grid-template-columns: 1fr 1fr;
				}
				.touch {
					&__head {
						font-size: 2rem;
						color: var(--clr-bangaGreen);
						padding: 1rem 0;
					}
					&__text {
						padding-bottom: 1rem;
					}
					&__items {
						gap: 1rem;
						.item {
							gap: 1rem;
							align-items: center;

							.icon {
								border-radius: 10px;
								padding: 1rem;
								background-color: var(--clr-white);
								box-shadow: 0 2px 8px rgba(0 0 0 / 0.16);
							}
							a {
								color: var(--clr-bgAdv);
								&:hover {
									color: var(--clr-primary-400);
									color: var(--clr-primary-700);
									text-decoration: underline;
								}
							}
						}
					}
				}
				.message {
					background-color: var(--clr-white);
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
					padding: 2rem;
					&__head {
						font-size: 2rem;
						color: var(--clr-bangaGreen);
						padding: 1rem 0;
					}
					&__form {
						gap: 1rem;
						.form-control {
							gap: 0.5rem;
							&.invalid {
								input,
								textarea {
									border: 1px solid salmon;
									// background-color: salmon;
								}
							}
							label {
								display: block;
							}
							input,
							textarea {
								width: 100%;
								padding: 0.75rem;
								outline: none;
							}
							button {
								background-color: var(--clr-bgAdv);
								border: 1px solid var(--clr-bgAdv);
								color: var(--clr-white);
								padding: 0.75rem 1.5rem;
								cursor: pointer;
							}
							.err-msg {
								color: rgb(241, 74, 55);
								font-size: 0.8rem;
							}
						}
					}
				}
			}
		}
	}
</style>
