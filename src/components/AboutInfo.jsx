import React from "react"
import Image from "next/image"
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"

import Fade from "react-reveal/Fade"



const AboutInfo = ({ text1, text2, order, bg }) => {


	if (order == 2) {
		return (


			<Container id='about' >
				<Grid
					container
					classes={{ root: "MuiGrid-wrap-xs-wrap-reverse" }}
					className='sec'>
									
					<Grid
						item
						order={2}
						xm={12}
						sm={12}
						md={6}
						container
						direction='column'
						justify='space-evenly'
						alignItems='flex-start'
						>
							<Fade left>
						<Box py={2}>
							<Typography variant='h5' component='h2'>
								{text1}
							</Typography>
						</Box>
						<Box py={2}>
							<Typography variant='h5' component='h2'>
								{text2} fugiat sunt molestiae nesciunt magni, commodi ex
								voluptatem possimus ipsa, itaque voluptatum incidunt illo
								assumenda.
							</Typography>
						</Box>
						<Box py={2}>
							<Typography variant='h5' component='h2'>
								{text2} fugiat sunt molestiae nesciunt magni, commodi ex
								voluptatem.
							</Typography>
						</Box>
					</Fade>
					</Grid>
					<Grid item container xm={12} sm={12} md={6}>

						<Box m='auto' >
						<Fade right>
							<Image
								src='/designerColor.svg'
								alt='Picture of the author'
								// layout='responsive'
								width={400}
								height={400}></Image>
		</Fade>
						</Box>
					</Grid>
				</Grid>
			</Container>

		)
	} else {
		return (
			<Box bgcolor="secondary.main" color="secondary.contrastText"  >
				<Container >
					<Grid container className='sec'>
						<Grid item container xm={order - 2} xm={12} sm={12} md={6}>
							<Box m='auto' className=''>
								<Image
									src='/undraw_Code_thinking_re_gka2.svg'
									alt='Picture of the author'
									// layout='responsive'
									width={350}
									height={350}></Image>
							</Box>
						</Grid>
						<Grid
							item
							xm={12}
							sm={12}
							md={6}
							container
							direction='column'
							justify='space-evenly'
							alignItems='flex-start'
							className=''>
							<Box py={2}>
								<Typography variant='h5' component='h2'>
									{text1}
								</Typography>
							</Box>
							<Box py={2}>
								<Typography variant='h5' component='h2'>
									{text2} fugiat sunt molestiae nesciunt magni, commodi ex
									voluptatem possimus ipsa, itaque voluptatum incidunt illo
									assumenda.
								</Typography>
							</Box>
							<Box py={2}>
								<Typography variant='h5' component='h2'>
									{text2} fugiat sunt molestiae nesciunt magni, commodi ex
									voluptatem.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		)
	}
}

export default AboutInfo
