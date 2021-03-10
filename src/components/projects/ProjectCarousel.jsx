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
	<Grid container justify='center' className='item' data-value='1'>
		<Fade bottom>
			<ProjectCard
				img='/mernCenter.svg'
				imgAlt='project'
				title='title'
				bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
			species, ranging across all continents except Antarctica'
			/>
		</Fade>
	</Grid>,
	<Grid container justify='center' className='item' data-value='2'>
		<Fade bottom>
			<ProjectCard
				img='/eCommerce.png'
				imgAlt='project'
				title='title'
				bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
			species, ranging across all continents except Antarctica'
			/>
		</Fade>
	</Grid>,
	<Grid container justify='center' className='item' data-value='3'>
		<Fade bottom>
			<ProjectCard
				img='/TheShoppies.png'
				imgAlt='project'
				title='title'
				bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
			species, ranging across all continents except Antarctica'
			/>
		</Fade>
	</Grid>,
	<Grid container justify='center' className='item' data-value='4'>
		<Fade bottom>
			<ProjectCard
				img='/TheShoppies.png'
				imgAlt='project'
				title='title'
				bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
			species, ranging across all continents except Antarctica'
			/>
		</Fade>
	</Grid>,
	<Grid container justify='center' className='item' data-value='5'>
		<Fade bottom>
			<ProjectCard
				img='/TheShopiesTerminator.png'
				imgAlt='project'
				title='title'
				bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
			species, ranging across all continents except Antarctica'
			/>
		</Fade>
	</Grid>,
]

const ProjectCarousel = () => {
	return (
		<Container className='sec'>
			<Grid item xs={12} align='start'>
				<Container>

				<Fade>
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
