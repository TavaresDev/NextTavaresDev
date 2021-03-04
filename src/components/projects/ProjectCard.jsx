import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Card,
	Box,
	Grid,
	Container,
	Paper,
	CardActionArea,
	CardMedia,
} from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { blue, green, grey } from "@material-ui/core/colors"

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
        margin:'1rem',
		transition: "all .3s ease-in",
		"&:hover": {
			// background: green[200],
			background: green[500],
			color: "white",
		},
		
	},
	button: {
		display: "inline-block",
		margin: "50px",
		transform: "scale(0.8)",
	},
})


const ProjectCard = ({title, bodyText, imgAlt, img}) => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt={imgAlt}
					height='280'
					image={img}
					title={imgAlt}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{bodyText}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions >
				<Button variant ='contained' size='small' color='primary'>
					Share
				</Button>
				<Button size='small' color='secondary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}

export default ProjectCard
