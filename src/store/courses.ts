import { defineStore } from "pinia";

import RoboticsImage from "@/assets/images/robotics-course.jpg";
import SratchImage from "@/assets/images/Scratch-course.jpg";
import PythonImage from "@/assets/images/python-course.jpg";
import WebDevImage from "@/assets/images/html-course.jpg";
import LanguageImage from "@/assets/images/languages.png";

export const useCourses = defineStore("courses", {
	state: () => ({
		courses: [
			{
				title: "Introduction to Robotics",
				description:
					"Ourhands-on approach ensures that younglearners gain practical experience from thestart.",
				deepDescription:
					"Welcome to Robotics Training for Kids! Ourhands-on approach ensures that younglearners gain practical experience from thestart. We begin with Digital Literacy,building a strong foundation in essentialtech skills. Next, we introduce CodingSkills with Scratch and Arduino, empoweringstudents to create and innovate usingblock-based coding. Finally, we guide themthrough Basic to Intermediate Robotics,where they apply their knowledge to excitingprojects. Join us in nurturing the nextgeneration of tech-savvy innovators!",
				image: RoboticsImage,
			},
			{
				title: "Introduction to language",
				description:
					"Dive into our engaging French and Chinese Language	Programs.",
				deepDescription:
					"Discover the World of Languages! Dive intoour engaging French and Chinese LanguagePrograms. Starting from beginner tointermediate levels, we focus on written,spoken, and listening skills to ensurefluency. Our interactive approach keepslearners engaged and having fun whilemastering new languages. Join us and opendoors to global opportunities!",
				image: LanguageImage,
			},
			{
				title: "Web Dev for Kids",
				description:
					"Our program empowers young learners to createfun and engaging web projects.",
				deepDescription:
					"Welcome to Web Development for Kids! Ourprogram empowers young learners to createfun and engaging web projects. We start withScratch Coding, using block-based coding tospark their interest. As they progress, weintroduce Web Development, teaching HTML,CSS, and Basic JavaScript at theintermediate level. Join us in nurturing thenext generation of web developers!",

				image: WebDevImage,
			},
			{
				title: "Scratch Course",
				description:
					"Teach scratch for programming languages and programming languages that will ",
				deepDescription:
					"Welcome to Creating Scratch Games! Ourprogram empowers young learners to createfun and engaging web projects. We start withScratch Coding, using block-based coding tospark their interest and teach them thebasics of game development. As theyprogress, we introduce Web Development,teaching HTML, CSS, and Basic JavaScript atthe intermediate level. Join us in nurturingthe next generation of web developers andgame creators!",
				image: SratchImage,
			},
			{
				title: "Python Programming",
				description:
					"We equip learners with Python knowledge as it is at the heart of AI",
				deepDescription:
					"With the rise of Artificial Intelligence python programming is a key skill that will be useful when training models and so on",
				image: PythonImage,
			},
		],
	}),
});
