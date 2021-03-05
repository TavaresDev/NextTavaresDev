import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, Box, Grid, Container, Typography } from "@material-ui/core"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import ProjectCard from "../projects/ProjectCard"
import SimpleCard from "./ProductCard"


const AboutServicesCarousel = () => {
	const responsive = {
		0: { items: 1 },
		668: { items: 2 },
		1024: { items: 3 },
	}

	const items = [
		<Grid container justify='center' className='item' data-value='1'>
			<SimpleCard
				// icon={<WebIcon fontSize="large" />}
				title={"Landing Page"}
				adjective={"Fast, Reliable, SEO focused"}
				text={"LoLorem ipsum dolor sit amet, consectetur adipiscing elit.  "}
				text2={
					" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
				}
			/>
		</Grid>,
		<Grid container justify='center' className='item' data-value='2'>
			<SimpleCard
				// icon={<WebIcon fontSize="large" />}
				title={"Web Site"}
				adjective={"Online Home for Your bussines"}
				text={"LoLorem ipsum dolor sit amet, consectetur adipiscing elit.  "}
				text2={
					" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
				}
			/>
		</Grid>,
		<Grid container justify='center' className='item' data-value='3'>
			<SimpleCard
				// icon={<WebIcon fontSize="large" />}
				title={"eCommerce "}
				adjective={"Fast, Reliable, SEO focused"}
				text={"LoLorem ipsum dolor sit amet, consectetur adipiscing elit.  "}
				text2={
					" Pellentesque sollicitudin ipsum commodo arcu tristique pharetra. "
				}
			/>
		</Grid>,
	]

	return (
		<Container id='services'  className='sec'>
			<Grid container>
				<Grid item xs={12} align='start'>
					<Box mb={3}>
						<Typography variant={"h3"}>
							<Box fontWeight='100'>What we do</Box>
						</Typography>
						<Typography gutterBottom variant={"subtitle1"} color='secondary' fontWeight='100'>
							Web solutions for your company
						</Typography>
					</Box>
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
