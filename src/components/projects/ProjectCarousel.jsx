import { Box, Container, Grid } from "@material-ui/core"
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
		<ProjectCard />
	</Grid>,
	<Grid container justify='center' className='item' data-value='2'>
		<ProjectCard />
	</Grid>,
	<Grid container justify='center' className='item' data-value='3'>
		<ProjectCard />
	</Grid>,
	<Grid container justify='center' className='item' data-value='4'>
		<ProjectCard />
	</Grid>,
	<Grid container justify='center' className='item' data-value='5'>
		<ProjectCard />
	</Grid>,

]

const ProjectCarousel = () => {
	return (
		<Container className='sec'>
			<AliceCarousel mouseTracking items={items} responsive={responsive} />
		</Container>
	)
}

export default ProjectCarousel
