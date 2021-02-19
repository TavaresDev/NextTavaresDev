import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hero from "../components/Hero"
import AboutInfo from "../components/AboutInfo"
import Color from "../components/Color"
import AboutServices from "../components/about/AboutServices"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ComplexGrid from "../ComplexGrid"

export default function Index() {
	return (
		<>
			<Hero heroTitle={'Expand your reach while you do what you love'} subTitle={'Slogan'} />
			{/* <ComplexGrid/> */}

			{/* <Color/> */}
	
			<AboutInfo
				order={2}
				text1='here is some text about me company'
				text2='here is some text about me company'
				/>
			<AboutInfo
				bg='bgPrimary'
				text1='here is some text about me company'
				text2='here is some text about me company'
				/>
						<AboutServices/>
				<Contact/>
	
	
			{/* <Box my={4}>
				<Typography variant='h4' component='h1' gutterBottom>
					Next.js example Home Page
				</Typography>
			</Box> */}
		</>
	)
}
