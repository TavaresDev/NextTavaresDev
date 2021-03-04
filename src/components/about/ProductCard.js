import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, Box, Grid, Container } from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { blue, green, grey } from "@material-ui/core/colors"

const useStyles = makeStyles({
	root: {
		minWidth: 300,
		maxWidth: 320,
		minHeight:320,
		background: "palette.primary.main",
		transition: "all .3s ease-in",
		"&:hover": {
			// background: green[200],
			background: green[500],
			color: "white",
		},
		bullet: {
			display: "inline-block",
			margin: "0 50px",
			transform: "scale(0.8)",
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 34,
		},
	},
})

export default function SimpleCard({ title, adjective, text, icon }) {
	const classes = useStyles()
	const bull = <span className={classes.bullet}>•</span>

	return (
		<Card className={classes.root} elevation={3}>
			<CardContent>
				<Grid item container align='start'>
					<Grid item>
						<Box ml={4}>{icon}</Box>
					</Grid>
				</Grid>
				<Typography variant='h5' component='h3' gutterBottom>
					{title}
				</Typography>
				
				<Typography className={classes.pos} color='textSecondary'>
					{adjective}
				</Typography>
				<Container>
					<Box m={1}>
						<Typography variant='body2' component='p'>
							{text}
						</Typography>
					</Box>

					<Box p={1}>
						<Typography variant='body2' component='p'>
							{text}
						</Typography>
					</Box>
				</Container>
			</CardContent>
			{/* <Box m={2}>
				<Button size='small'>Learn More</Button>
			</Box> */}
		</Card>
	)
}
