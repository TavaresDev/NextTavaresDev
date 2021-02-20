import { Typography, Box } from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import React from "react"

import LazyHero from "react-lazy-hero"
// http://react-lazy-hero.danielstefanovic.com/

const Hero = ({ heroTitle, subTitle }) => {
	return (
		<LazyHero
			// imageSrc='https://unsplash.it/2000/2000'
			color={green[200]}
			minHeight='80vh'
			opacity={Number(1)}
			parallaxOffset={Number(0.4)}>
				
			<Typography variant='h2' color={"secondary"} component='h1'>
				<Box fontWeight='fontWeightMedium' component='span' color='white'>Tavares{" "}</Box>
				<Box component='span' color=''>{heroTitle}</Box>
			</Typography>

			<Typography color={"secondary"} variant='h4'>
				<Box component='span' color=''>{subTitle}{" "}</Box>
				<Box fontWeight='fontWeightMedium' component='span' color='white'>online presence</Box>
			</Typography>
		</LazyHero>
	)
}

export default Hero
