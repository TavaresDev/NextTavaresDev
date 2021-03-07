import { Typography, Box } from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import React from "react"

// http://react-lazy-hero.danielstefanovic.com/
import LazyHero from "react-lazy-hero"

// https://www.react-reveal.com/docs/
import Fade from "react-reveal/Fade"

const Hero = ({ heroTitle, heroTitleWord, subTitle, subTitleWord }) => {
	return (
		<LazyHero
			// imageSrc='https://unsplash.it/2000/2000'
			color={green[200]}
			minHeight='80vh'
			opacity={Number(1)}
			parallaxOffset={Number(0.4)}>

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
		</LazyHero>
	)
}

export default Hero
