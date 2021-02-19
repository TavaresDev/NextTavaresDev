import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {Card, Box} from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { blue, green, grey } from "@material-ui/core/colors"


const useStyles = makeStyles({
	root: {
		minWidth: 300,
		maxWidth: 420,
		background: 'palette.primary.main',
		transition: 'all .3s ease-in',
	'&:hover': {
		// background: green[200],
		background: green[300],
		color: 'white'
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}})

export default function SimpleCard({ title, adjective, text }) {
	const classes = useStyles()

	return (
		<Card className={classes.root} elevation={3} >
			<CardContent>
				<Typography
					variant='h5'
					component='h3'
					gutterBottom>
					{title}
				</Typography>

				<Typography className={classes.pos} color='textSecondary'>
					{adjective}
				</Typography>

				<Typography variant='body2' component='p'>
					{text}
					<br />
				</Typography>
				<Typography variant='body2' component='p'>
					{text}
					<br />
				</Typography>
				<Typography variant='body2' component='p'>
					{text}
					<br />
				</Typography>
				<Typography variant='body2' component='p'>
					{text}
					<br />
				</Typography>
			</CardContent>
			<Box  m={2}>
				<Button size='small'>Learn More</Button>
			</Box>
		</Card>
	)
}
