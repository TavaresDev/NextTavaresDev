import React from "react"
import { Typography, Box, Grid} from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import styles from "./MyHero.module.css"

// https://www.react-reveal.com/docs/
import Fade from "react-reveal/Fade"

const MyHero = ({ heroTitle, heroTitleWord, subTitle, subTitleWord }) => {
	return (
		<>
			<Box className={styles.hero} bgcolor='secondary.light'>
				<Box >
					<Fade left>
						<Typography align='center' variant='h2' color={"secondary"} component='h1'>
							<Box fontWeight='fontWeightMedium' component='span' color='white'>
								{heroTitleWord}{" "}
							</Box>
							<Box component='span' color=''>
								{heroTitle}
							</Box>
						</Typography>
					</Fade>

					<Fade right>
						<Typography align='center'  color={"secondary"} variant='h4'>
							<Box component='span' color=''>
								{subTitle}{" "}
							</Box>
							<Box fontWeight='fontWeightMedium' component='span' color='white'>
								{subTitleWord}
							</Box>
						</Typography>
					</Fade>
				</Box>
			</Box>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#a5d6a7'
					fill-opacity='1'
					d='M0,192L48,181.3C96,171,192,149,288,128C384,107,480,85,576,106.7C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
			</svg>
		</>
	)
}

export default MyHero
