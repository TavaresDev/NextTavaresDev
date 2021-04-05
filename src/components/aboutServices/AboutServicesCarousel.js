import React from "react"
import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'
import { makeStyles } from "@material-ui/core/styles"
import { Card, Box, Grid, Container, Typography } from "@material-ui/core"

// https://www.npmjs.com/package/react-alice-carousel
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import ProjectCard from "../projects/ProjectCard"
import SimpleCard from "./ProductCard"

import Rotate from "react-reveal/Rotate"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

const AboutServicesCarousel = () => {
	//i18n
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : pt

	const responsive = {
		0: { items: 1 },
		668: { items: 2 },
		1024: { items: 3 },
	}

	const items = [

		<Grid container justify='center' className='item' data-value='1'>
			{/* <Fade left > */}
			<SimpleCard
				// icon={<WebIcon fontSize="large" />}
				title={t.landingPage}
				adjective={t.landingSubtitle}
				text={t.landingBody}
			// text2=" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "

			/>
			{/* </Fade> */}
		</Grid>,
		<Grid container justify='center' className='item' data-value='2'>
			{/* <Fade bottom> */}
			<SimpleCard
				// icon={<WebIcon fontSize="large" />}
				title={t.website}
				adjective={t.websiteSubtitle}
				text={t.websiteBody}
			// text2=" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
			/>
			{/* </Fade> */}
		</Grid>,
		<Grid container justify='center' className='item' data-value='3'>
			{/* <Fade  right> */}
			<SimpleCard
				// icon={<WebIcon fontSize="large" />}
				title={t.ecommerce}
				adjective={t.ecommerceSubtitle}
				text={t.ecommerceBody}
			// text2="Display your products and your style to clients. Using modern Headless CMS, you get the performance of big e-commerce like Shopify, and the customization of a system created from scratch."

			/>
			{/* </Fade> */}
		</Grid>,
	]

	return (
		<Container id='services' className='secB'>
			<Grid container>
				<Grid item xs={12} align='start'>
					<Container>

						<Fade bottom cascade>
							<Box mb={3}>
								<Typography variant={"h3"}>
									<Box fontWeight='100'>{t.servicesTitle}</Box>
								</Typography>
								<Typography gutterBottom variant={"h6"} component='h4' color='secondary'>
									<Box fontWeight='200'>{t.servicesSubtitle}</Box>
								</Typography>
							</Box>
						</Fade>
					</Container>
				</Grid>

				<Grid item container spacing={4}>
					{/* <Fade> */}

					<AliceCarousel
						mouseTrackingEnabled={true}
						disableButtonsControls
						mouseTracking
						items={items}
						responsive={responsive}
					/>
					{/* </Fade> */}
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutServicesCarousel
