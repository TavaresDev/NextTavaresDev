import React from "react"
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
	const responsive = {
		0: { items: 1 },
		668: { items: 2 },
		1024: { items: 3 },
	}

	const items = [
		<Grid container justify='center' className='item' data-value='1'>
			<Fade left >
				<SimpleCard
					// icon={<WebIcon fontSize="large" />}
					title={"Landing Page"}
					adjective={"Fast, Reliable, SEO focused"}
					text={"LoLorem ipsum dolor sit amet, consectetur adipiscing elit.  "}
					text2={
						" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
					}
				/>
			</Fade>
		</Grid>,
		<Grid container justify='center' className='item' data-value='2'>
			<Fade bottom>
				<SimpleCard
					// icon={<WebIcon fontSize="large" />}
					title={"Web Site"}
					adjective={"Online Home for Your bussines"}
					text={"LoLorem ipsum dolor sit amet, consectetur adipiscing elit.  "}
					text2={
						" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
					}
				/>
			</Fade>
		</Grid>,
		<Grid container justify='center' className='item' data-value='3'>
			<Fade  right>
				<SimpleCard
					// icon={<WebIcon fontSize="large" />}
					title={"eCommerce "}
					adjective={"Fast, Reliable, SEO focused"}
					text={"LoLorem ipsum dolor sit amet, consectetur adipiscing elit.  "}
					text2={
						" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
					}
				/>
			</Fade>
		</Grid>,
	]

	return (
		<Container id='services' className='sec'>
			<Grid container>
				<Grid item xs={12} align='start'>
					<Container>

					<Fade bottom cascade>
						<Box mb={3}>
							<Typography variant={"h3"}>
								<Box fontWeight='100'>What we do</Box>
							</Typography>
							<Typography gutterBottom variant={"h6"} color='secondary'>
								<Box fontWeight='200'>Web solutions for your company</Box>
							</Typography>
						</Box>
					</Fade>
					</Container>
				</Grid>

				<Grid item container spacing={4}>
					<AliceCarousel
						mouseTrackingEnabled={true}
						disableButtonsControls
						mouseTracking
						items={items}
						responsive={responsive}
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutServicesCarousel
