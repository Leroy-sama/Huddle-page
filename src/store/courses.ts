import { defineStore } from "pinia";

import RoboticsImage from "@/assets/images/robotics-course.jpg";
import SratchImage from "@/assets/images/Scratch-course.jpg";
import PythonImage from "@/assets/images/python-course.png";
import WebDevImage from "@/assets/images/html-course.jpg";
import LanguageImage from "@/assets/images/spanish-language.jpg";

export const useCourses = defineStore("courses", {
	state: () => ({
		courses: [
			{
				id: 1,
				slug: "introduction-to-robotics",
				title: "Introduction to Robotics",
				description:
					"Our hands-on approach ensures that young learners gain practical experience from the start.",
				deepDescription:
					"Welcome to Robotics Training for Kids! Our hands-on approach ensures that young learners gain practical experience from the start. We begin with Digital Literacy, building a strong foundation in essential tech skills. Next, we introduce Coding Skills with Scratch and Arduino, empowering students to create and innovate using block-based coding. Finally, we guide them through Basic to Intermediate Robotics, where they apply their knowledge to exciting projects. Join us in nurturing the next generation of tech-savvy innovators!",
				moduleDescription:
					"Get ready to become a robotics wizard! In this exciting course, young learners will dive into the magical world of robotics and programming—the superpowers behind every robot. With fun projects like building your first robot or creating automated systems, kids will learn how to bring their ideas to life. By the end, they'll have their very own robot to show off to friends and family!",
				image: RoboticsImage,
				level: "13-17 years",
				duration: "12 Sessions",
				price: "KES 12,999",
				ageGroup: "13-17 Years",
				courseLevel: "Beginner",
				language: "English, Swahili",
				certificate: "Yes",
				skills: [
					"Digital Literacy and tech foundations",
					"Scratch and Arduino programming",
					"Building and programming robots",
					"Problem-solving and logical thinking",
				],
			},
			{
				id: 2,
				slug: "spanish-language",
				title: "Spanish Language",
				description: "Dive into our spanish learning experience",
				deepDescription:
					"Discover the World of Languages! Dive into our engaging Spanish Language Program. Starting from beginner to intermediate levels, we focus on written, spoken, and listening skills to ensure fluency. Our interactive approach keeps learners engaged and having fun while mastering new languages. Join us and open doors to global opportunities!",
				moduleDescription:
					"¡Hola! Get ready to explore the vibrant world of Spanish! In this exciting language adventure, young learners will discover the magic of speaking, reading, and writing in Spanish. Through interactive games, cultural activities, and fun conversations, kids will build confidence in their new language skills while learning about Spanish-speaking cultures around the world.",
				image: LanguageImage,
				level: "10-17 years",
				duration: "16 Sessions",
				price: "KES 8,999",
				ageGroup: "10-17 Years",
				courseLevel: "Beginner",
				language: "Spanish, English",
				certificate: "Yes",
				skills: [
					"Speaking and pronunciation skills",
					"Reading comprehension",
					"Writing and grammar fundamentals",
					"Cultural understanding and appreciation",
				],
			},
			{
				id: 3,
				slug: "html-and-css-basics",
				title: "HTML and CSS Basics",
				description:
					"Our program empowers young learners to create fun and engaging web projects.",
				deepDescription:
					"Welcome to Web Development for Kids! Our program empowers young learners to create fun and engaging web projects. We start with basic HTML structure, then move to CSS styling, and finally introduce Basic JavaScript at the intermediate level. Students will build their own websites from scratch! Join us in nurturing the next generation of web developers!",
				moduleDescription:
					"Get ready to become a web wizard! In this exciting course, young learners will dive into the magical world of HTML and CSS—the superpowers behind every website. With fun projects like designing a personal webpage or creating a mini-game site, kids will learn how to build and decorate their own corners of the internet. By the end, they'll have their very own website to show off to friends and family!",
				image: WebDevImage,
				level: "10-17 years",
				duration: "12 Sessions",
				price: "KES 7,399",
				ageGroup: "8-12 Years",
				courseLevel: "Novice",
				language: "HTML, CSS",
				certificate: "Yes",
				skills: [
					"How to build cool webpages with HTML and make them pop with CSS",
					"HTML tags and colorful CSS tricks",
					"Adding pictures, buttons, and links like a pro",
					"Launch your own website for the world to see",
				],
			},
			{
				id: 4,
				slug: "programming-creativity-with-scratch",
				title: "Programming Creativity with Scratch",
				description:
					"Teach scratch to the young ones to foster a programming mind",
				deepDescription:
					"Welcome to Creating Scratch Games! Our program empowers young learners to create fun and engaging games and animations. We start with Scratch Coding, using block-based coding to spark their interest and teach them the basics of game development, storytelling, and creative programming. Join us in nurturing the next generation of creative programmers!",
				moduleDescription:
					"Get ready to become a game creator! In this exciting course, young learners will dive into the colorful world of Scratch programming. Through drag-and-drop coding blocks, kids will create their own games, animations, and interactive stories. It's like digital LEGO for the mind! By the end, they'll have amazing projects to share with friends and family.",
				image: SratchImage,
				level: "8-12 years",
				duration: "8 Sessions",
				price: "KES 5,999",
				ageGroup: "8-12 Years",
				courseLevel: "Beginner",
				language: "Scratch",
				certificate: "Yes",
				skills: [
					"Block-based coding fundamentals",
					"Game development and animation",
					"Creative storytelling through code",
					"Problem-solving and logical thinking",
				],
			},
			{
				id: 5,
				slug: "introduction-to-python-programming",
				title: "Introduction to Python Programming",
				description:
					"We equip learners with Python knowledge as it is at the heart of AI",
				deepDescription:
					"With the rise of Artificial Intelligence, Python programming is a key skill that will be useful when training models and building AI applications. This course covers Python fundamentals, data structures, basic algorithms, and an introduction to AI and machine learning concepts suitable for young learners.",
				moduleDescription:
					"Get ready to become a Python programmer! In this exciting course, young learners will discover the power of Python—one of the world's most popular programming languages. From creating simple programs to building mini AI projects, kids will learn the language that powers everything from websites to space rockets. It's the perfect stepping stone into the future of technology!",
				image: PythonImage,
				level: "13-17 years",
				duration: "14 Sessions",
				price: "KES 9,999",
				ageGroup: "13-17 Years",
				courseLevel: "Intermediate",
				language: "Python",
				certificate: "Yes",
				skills: [
					"Python syntax and programming fundamentals",
					"Data structures and algorithms",
					"Introduction to AI and machine learning",
					"Building real-world applications",
				],
			},
		],
	}),
	getters: {
		getCourseBySlug: (state) => {
			return (slug: string) =>
				state.courses.find((course) => course.slug === slug);
		},
	},
});
