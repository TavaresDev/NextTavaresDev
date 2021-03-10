import React from "react"
import Image from "next/image"
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core"
import { fade, makeStyles } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"

import Fade from "react-reveal/Fade"
import Wave from "./shared/wave/Wave"

const AboutInfo = ({ text1, text2, order, bg }) => {
	if (order == 2) {
		return (
			< >
				<Container id='about'>
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
							alignItems='flex-start'>
							<Container>
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
							</Container>
						</Grid>
						<Grid item container xm={12} sm={12} md={6}>
							<Box m='auto'>
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
				<svg style={{verticalAlign: 'top', display: 'inline-block', margin:'-1'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#205723" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,106.7C672,117,768,203,864,245.3C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
				</>
		)
	} else {
		return (
			<>
				<Box bgcolor='secondary.main' color='secondary.contrastText'>
					<Container>
						<Grid container className='sc'>
							<Grid item container xm={order - 2} xm={12} sm={12} md={6}>
								<Box m='auto' className=''>
									<Fade left>
										<Image
											src='/undraw_Code_thinking_re_gka2.svg'
											alt='Picture of the author'
											// layout='responsive'
											width={350}
											height={350}></Image>
									</Fade>
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
								<Container>
									<Fade right>
										<Box py={2}>
											<Typography variant='h5' component='h2'>
												{text1}
											</Typography>
										</Box>
										<Box py={2}>
											<Typography variant='h6' component='h2'>
												{text2} fugiat sunt molestiae nesciunt magni, commodi ex
												voluptatem possimus ipsa, itaque voluptatum incidunt
												illo assumenda.
											</Typography>
										</Box>
										<Box py={2}>
											<Typography variant='h6' component='h2'>
												{text2} fugiat sunt molestiae nesciunt magni, commodi ex
												voluptatem.
											</Typography>
										</Box>
									</Fade>
								</Container>
							</Grid>
						</Grid>
					</Container>
				</Box>
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #205723" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,112C672,85,768,75,864,90.7C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
			</>
		)
	}
}

export default AboutInfo
