import { Box, Grid, Typography, Container } from "@material-ui/core"
import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import ProjectCard from "./ProjectCard"

import Fade from "react-reveal/Fade"

const responsive = {
	0: { items: 1 },
	668: { items: 2 },
	1024: { items: 3 },
}

const items = [
	<Grid container justify='center' className='item' data-value='2'>
		{/* <Fade bottom> */}
			<ProjectCard
				img='/TheGrowBoxProjectSM.png'
				imgAlt='The Grow box Project'
				title='The Grow box'
				bodyText='Control box for your garden - A website made to showcase an automation project.'
				link='https://tavaresdev.github.io/TheGrowBox/'
			/>
		{/* </Fade> */}
	</Grid>,
	<Grid container justify='center' className='item' data-value='3'>
		{/* <Fade bottom> */}
			<ProjectCard
				img='/pomo.png'
				imgAlt='project'
				title='Pomodoro App'
				bodyText='Web application developed to help people suffering from procrastination. Based on the scientifically proved Pomodoro technique.'
				link='https://pomodoronext.vercel.app/'
			/>
		{/* </Fade> */}
	</Grid>,
	<Grid container justify='center' className='item' data-value='1'>
		{/* <Fade bottom> */}
			<ProjectCard
				img='/mernCenter.svg'
				imgAlt='project'
				title='Mern eCommerce'
				link='https://mern--ecommerce.herokuapp.com/'
				bodyText='Complete eCommerce build with React, Node, Express and redux, for complete control over every aspect of the shopping experience.'
			/>
		{/* </Fade> */}
	</Grid>,
	<Grid container justify='center' className='item' data-value='4'>
		{/* <Fade bottom> */}
			<ProjectCard
				img='/nextCommerce.png'
				imgAlt='project'
				title='NextCommerce'
				link='https://nextcommerce-kohl.vercel.app/'
				bodyText='Fully functional eCommerce using Headless CMS. All the facilities from big commerce, like stock, organization, and security with the ability os modeling the front however you need.'
			/>
		{/* </Fade> */}
	</Grid>,
	<Grid container justify='center' className='item' data-value='5'>
		{/* <Fade bottom> */}
			<ProjectCard
				img='/TheShoppies.png'
				imgAlt='project'
				title='MovieApp '
				link='https://tavaresdev.github.io/TheShoppies/'
				bodyText='study case app, created with React, Node, Express,- App made for movie lovers, you can search movies, find information and where to watch them. Save your favorites and share with anyone.'
			/>
		{/* </Fade> */}
	</Grid>,
]

const ProjectCarousel = () => {
	return (
		<Container className='sec'>
			<Grid item xs={12} align='start'>
				<Container>

				<Fade bottom>
					<Box m={3}>
						<Typography variant={"h3"}>
							<Box fontWeight='100'>Projects</Box>
						</Typography>
						<Typography gutterBottom variant={"h6"} color='secondary'>
							<Box fontWeight='200'>Solutions made for our Partners</Box>
						</Typography>
					</Box>
				</Fade>
				</Container>
			</Grid>
			<AliceCarousel
				mouseTrackingEnabled={true}
				// disableButtonsControls
				disableDotsControls
				mouseTracking
				items={items}
				responsive={responsive}
			/>
		</Container>
	)
}

export default ProjectCarousel
