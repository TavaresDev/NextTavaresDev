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
		padding: "1rem",
		background: "palette.primary.main",
		transition: "all .3s ease-in",
		"&:hover, &:hover button": {
			// background: green[200],
			background: green[500],
			color: "white",
		},
	},
	title: {
		fontSize: 28,
		fontWeight:500,
		paddingTop:'0rem',
		lineHeight: 1.2,
		// color:  "primary.main",
	},
	subtitle: {
		fontSize:14,
		fontWeight:200,
		// color:  "primary.main",
	},
	posBottom: {
		position: 'absolute',
		padding:'0.5rem',
		bottom: "0px",
		// left: "px",
		right: "1.1rem",
		// marginBottom: 34,
	
	},
	button: {
		color:green[800],
		padding:'0.5rem',
		transition: "all .3s ease-in",
		"&:hover": {
			background: 'white',
			// background: green[200],
			// background: green[500],
			// color: "white",
		},
	}
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
				<Typography className={classes.title} component='h3'>
					{title}
				</Typography>

				<Typography className={classes.subtitle}  color='textSecondary'>
					{adjective}
				</Typography>

				<Box>
					<Box mt={1} mb={2} >
						<Typography align='justify' variant='body2' component='p'>
							{text}
						</Typography>
					</Box>
					<Box mb={2}  >
						<Typography align='justify' variant='body2' component='p'>
							{text2}
						</Typography>
					</Box>
					<Box   >
						<Typography align='justify' variant='body2' component='p'>
							{text2}
						</Typography>
					</Box>


				</Box>
			</CardContent>
			<CardActions className={classes.posBottom}>
				{/* <Button  variant='contained' size='small' color='secondary'>
					Share
				</Button> */}
				<Button className={classes.button} size='small' >
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}
