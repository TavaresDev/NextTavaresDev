import React from "react"
import Hero from "../components/Hero"
import AboutInfo from "../components/AboutInfo"
import Contact from "../components/contact/Contact"

import ProjectCarousel from "../components/projects/ProjectCarousel"
import AboutServicesCarousel from "../components/about/AboutServicesCarousel"
import MyHero from "../components/hero/MyHero"

const slogans = `Bring your business to the next level!

We at Tavares Web SOLUTIONS  
Take care of your web presence, using the best Tech available.

Connect your business with the right clients.
`

const idea = `thru eCommerce website and social media, we present youR BUSSINES to the right clients`

export default function Index() {
	return (
		<>
			
			<MyHero
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
