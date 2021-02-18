import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hero from "../components/Hero"
import AboutInfo from "../components/AboutInfo"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Index() {
	return (
		<>
			<Hero heroTitle={'Tavares'} subTitle={'Slogan'} />
			<AboutInfo
				text1='here is some text about me company'
				text2='here is some text about me company'
			/>
			<AboutInfo
				bg='bg-info'
				order={"order-lg-2 order-md-1"}
				text1='here is some text about me company'
				text2='here is some text about me company'
			/>
			<Contact/>

			<Footer/>
			{/* <Box my={4}>
				<Typography variant='h4' component='h1' gutterBottom>
					Next.js example Home Page
				</Typography>
			</Box> */}
		</>
	)
}
