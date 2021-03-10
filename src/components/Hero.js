import { Typography, Box } from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import React from "react"

// http://react-lazy-hero.danielstefanovic.com/
import LazyHero from "react-lazy-hero"

// https://www.react-reveal.com/docs/
import Fade from "react-reveal/Fade"
import Wave from "./shared/wave/Wave"

const Hero = ({ heroTitle, heroTitleWord, subTitle, subTitleWord }) => {
	return (
		<>
		<LazyHero
			// imageSrc='https://unsplash.it/2000/2000'
			color={green[200]}
			minHeight='80vh'
			opacity={Number(1)}
			parallaxOffset={Number(0.4)}>
				<Box mt={10}>

			<Fade left>
				<Typography variant='h2' color={"secondary"} component='h1'>
					<Box fontWeight='fontWeightMedium' component='span' color='white'>
						{heroTitleWord}{" "}
					</Box>
					<Box component='span' color=''>
						{heroTitle}
					</Box>
				</Typography>
			</Fade>

			<Fade right>

			<Typography color={"secondary"} variant='h4'>
				<Box component='span' color=''>
					{subTitle}{" "}
				</Box>
				<Box fontWeight='fontWeightMedium' component='span' color='white'>
					{subTitleWord}
				</Box>
			</Typography>
			</Fade>
			</Box>
		</LazyHero>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a5d6a7" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,128C384,107,480,85,576,106.7C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
		{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.6" d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,229.3C672,213,768,203,864,197.3C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}

		</>
	)
}

export default Hero
