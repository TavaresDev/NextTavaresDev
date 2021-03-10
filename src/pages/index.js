import React from "react"
import Hero from "../components/Hero"
import AboutInfo from "../components/AboutInfo"
import Contact from "../components/contact/Contact"

import ProjectCarousel from "../components/projects/ProjectCarousel"
import AboutServicesCarousel from "../components/about/AboutServicesCarousel"

export default function Index() {
	return (
		<>
			<Hero
				heroTitle={"web solutions"}
				heroTitleWord={"Tavares"}
				subTitle={"We expand your reach, while you do what "}
				subTitleWord={"you Love "}
			/>

			<AboutServicesCarousel />

			<AboutInfo
				order={2}
				text1='here is some text about me company'
				text2='here is some text about me company'
			/><AboutInfo
				bg='bgPrimary'
				text1='here is some text about me company'
				text2='here is some text about me company'
			/>

			<ProjectCarousel />
			{/* <Projects/> */}
			<Contact />
		</>
	)
}
