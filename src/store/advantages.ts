import { defineStore } from "pinia";

import Icon1 from "@/assets/icons/Instructor.vue";
import Icon2 from "@/assets/icons/PricingIcon.vue";
import Icon3 from "@/assets/icons/LearningIcon.vue";
import Icon4 from "@/assets/icons/Curriculum.vue";

export const useAdsStore = defineStore("ads", {
	state: () => ({
		ads: [
			{
				icon: Icon1,
				title: "Expert Instructors",
				description:
					"Our dedicated trainers bring over two years of experience in education technology, ensuring top-notch learning for all students.",
			},
			{
				icon: Icon2,
				title: "Affordable Pricing",
				description:
					"Your child will receive a high-quality learning								experience, ensuring value for every coin spent.",
			},
			{
				icon: Icon3,
				title: "Flexible Learning",
				description:
					"Flexible Learning at FUZU EDTECH! We offer both								physical classroom learning experiences and								online private tutoring.",
			},
			{
				icon: Icon4,
				title: "Co-curriculum Activities",
				description:
					"We believe in holistic development, which is why								we've partnered with experts to organize and								attend various events.",
			},
		],
	}),
});
