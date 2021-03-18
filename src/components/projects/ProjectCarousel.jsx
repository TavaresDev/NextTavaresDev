import React from "react"
import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'
import { Box, Grid, Typography, Container } from "@material-ui/core"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import ProjectCard from "./ProjectCard"

import Fade from "react-reveal/Fade"

const responsive = {
	0: { items: 1 },
	668: { items: 2 },
	1024: { items: 3 },
}

const ProjectCarousel = () => {
	//i18n
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : pt

	const items = [
		<Grid container justify='center' className='item' data-value='2'>
			{/* <Fade bottom> */}
			<ProjectCard
				img='/TheGrowBoxProjectSM.png'
				imgAlt='The Grow box Project'
				title={t.theGrowboxTitle}
				bodyText={t.theGrowboxBody}
				link='https://tavaresdev.github.io/TheGrowBox/'
				button={t.projectsButton}

			/>
			{/* </Fade> */}
		</Grid>,
		<Grid container justify='center' className='item' data-value='3'>
			{/* <Fade bottom> */}
			<ProjectCard
				img='/pomo.png'
				imgAlt='project'
				title={t.pomodoroTitle}
				bodyText={t.pomodoroBody}
				button={t.projectsButton}
				link='https://pomodoronext.vercel.app/'
			/>
			{/* </Fade> */}
		</Grid>,
		<Grid container justify='center' className='item' data-value='1'>
			{/* <Fade bottom> */}
			<ProjectCard
				img='/mernCenter.svg'
				imgAlt='project'
				title={t.nextCommerceTitle}
				bodyText={t.nextCommerceBody}
				button={t.projectsButton}
				link='https://mern--ecommerce.herokuapp.com/'
			/>
			{/* </Fade> */}
		</Grid>,
		<Grid container justify='center' className='item' data-value='4'>
			{/* <Fade bottom> */}
			<ProjectCard
				img='/nextCommerce.png'
				imgAlt='project'
				title={t.movieAppTitle}
				bodyText={t.movieAppBody}
				button={t.projectsButton}
				link='https://nextcommerce-kohl.vercel.app/'
			/>
			{/* </Fade> */}
		</Grid>,
		<Grid container justify='center' className='item' data-value='5'>
			{/* <Fade bottom> */}
			<ProjectCard
				img='/TheShoppies.png'
				imgAlt='project'
				title={t.movieAppTitle}
				bodyText={t.movieAppBody}
				button={t.projectsButton}
				link='https://tavaresdev.github.io/TheShoppies/'
			/>
			{/* </Fade> */}
		</Grid>,
	]
	return (
		<Container className='sec'>
			<Grid item xs={12} align='start'>
				<Container>

					<Fade bottom>
						<Box m={3}>
							<Typography variant={"h3"}>
								<Box fontWeight='100'>{t.projectsTitle}</Box>
							</Typography>
							<Typography gutterBottom variant={"h6"} color='secondary'>
								<Box fontWeight='200'>{t.projectsSubtitle}</Box>
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
