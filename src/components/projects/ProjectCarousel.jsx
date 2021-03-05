import { Box, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import ProjectCard from "./ProjectCard"

const responsive = {
	0: { items: 1 },
	668: { items: 2 },
	1024: { items: 3 },
}

const items = [
	<Grid container justify='center' className='item' data-value='1'>
		<ProjectCard
			img='/eCommerce.png'
			imgAlt='project'
			title='title'
			bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica'
		/>
	</Grid>,
	<Grid container justify='center' className='item' data-value='2'>
		<ProjectCard
			img='/TheGrowBoxProjectSM.png'
			imgAlt='project'
			title='title'
			bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica'
		/>
	</Grid>,
	<Grid container justify='center' className='item' data-value='3'>
	<ProjectCard
			img='/TheShoppies.png'
			imgAlt='project'
			title='title'
			bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica'
		/>
	</Grid>,
	<Grid container justify='center' className='item' data-value='4'>
	<ProjectCard
			img='/TheShoppies.png'
			imgAlt='project'
			title='title'
			bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica'
		/>
	</Grid>,
	<Grid container justify='center' className='item' data-value='5'>
	<ProjectCard
			img='/TheShopiesTerminator.png'
			imgAlt='project'
			title='title'
			bodyText='Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica'
		/>
	</Grid>,
]

const ProjectCarousel = () => {
	return (
		<Box className='sec'>
			<Grid item xs={12} align='start'>
				<Box m={3}>
					<Typography variant={"h3"}>
						<Box fontWeight=''>What we have done</Box>
					</Typography>
					<Typography gutterBottom variant={"h5"}>
						Solutions made for our Partners
					</Typography>
				</Box>
			</Grid>
			<AliceCarousel
				mouseTrackingEnabled={true}
				// disableButtonsControls
				disableDotsControls
				mouseTracking
				items={items}
				responsive={responsive}
			/>
		</Box>
	)
}

export default ProjectCarousel
