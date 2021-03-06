import React from "react"
import {useRouter} from 'next/router'
import en from '../locales/en'
import pt from '../locales/pt'
import AboutInfo from "../components/aboutInfo/AboutInfo"
import Contact from "../components/contact/Contact"
import ProjectCarousel from "../components/projects/ProjectCarousel"
import AboutServicesCarousel from "../components/aboutServices/AboutServicesCarousel"
import MyHero from "../components/hero/MyHero"



export default function Index() {
	//i18n
	const router = useRouter()
	const { locale} = router
	const t = locale === 'en' ? en : pt


	return (
		<>
			
			<MyHero
				heroTitle={t.heroTitle}
				heroTitleWord={"Tavares"}
				subTitle={t.heroSubtitle}
				subTitleWord={t.heroSubtitle2}
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

