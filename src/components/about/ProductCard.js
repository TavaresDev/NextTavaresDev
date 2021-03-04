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
		position: 'relative',
		minWidth: 300,
		maxWidth: 320,
		minHeight: 320,
		margin: "1rem",
		background: "palette.primary.main",
		transition: "all .3s ease-in",
		"&:hover": {
			// background: green[200],
			background: green[500],
			color: "white",
		},
	},
	title: {
		fontSize: 34,
		color:  "primary.main",
	},
	posBottom: {
		position: 'absolute',
		bottom: "0px",
		left: "0px",
		right: "0px",

		// marginBottom: 34,
	},
})

export default function SimpleCard({ title, adjective, text, text2, icon }) {
	const classes = useStyles()
	const bull = <span className={classes.bullet}>•</span>

	return (
		<Card className={classes.root}>
			<CardContent>
				{/* <Grid item container align='start'>
					<Grid item>
						<Box ml={4}>{icon}</Box>
					</Grid>
				</Grid> */}
				<Typography className={classes.title} gutterBottom variant='h4' component='h3'color="secondary.main" >
					{title}
				</Typography>

				<Typography  color='textSecondary'>
					{adjective}
				</Typography>

				<Box>
					<Box py={1}>
						<Typography variant='h6' component='p'>
							{text}
						</Typography>
					</Box>

					<Box >
						<Typography variant='h6' component='p'>
							{text2}
						</Typography>
					</Box>
				</Box>
			</CardContent>
			<CardActions className={classes.posBottom}>
				<Button  variant='contained' size='small' color='secondary'>
					Share
				</Button>
				<Button size='small' color='secondary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}
