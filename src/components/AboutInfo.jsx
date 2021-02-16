import React from "react"

import Image from "next/image"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


// const styles = {
// 	grid: {
// 		position: "relative",
// 		width: "100%",
// 		minHeight: "1px",
// 		paddingRight: "15px",
// 		paddingLeft: "15px",
// 		flexBasis: "auto",
// 	},
// }
// const useStyles = makeStyles(styles)
const AboutInfo = ({ text1, text2, order, bg }) => {
	// const classes = useStyles()
	return (
		<Container  className={`sec ${bg}`}>
			<Grid container className='box'>
				<Grid item container xm={12} sm={12} md={6}>
					<Box m='auto' className='box'>
						<Image
							src='/undraw_dev.svg'
							alt='Picture of the author'
							// layout='responsive'
							width={400}
							height={400}></Image>
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
					className='box'>
					<Box m={2}>
						<Typography variant='h5' component='h2'>
							{text1}
						</Typography>
					</Box>
					<Box m={2}>
						<Typography variant='h5' component='h2'>
							{text2} fugiat sunt molestiae nesciunt magni, commodi ex
							voluptatem possimus ipsa, itaque voluptatum incidunt illo
							assumenda.
						</Typography>
					</Box>
					<Box  m={2}>
						<Typography variant='h5' component='h2'>
							{text2} fugiat sunt molestiae nesciunt magni, commodi ex
							voluptatem.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutInfo
