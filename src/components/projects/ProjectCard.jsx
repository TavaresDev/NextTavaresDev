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
	},
})

const ProjectCard = () => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt='Contempltile'
					height='280'
					image='/TheShopiesTerminator.png'
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						Lizard
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					Share
				</Button>
				<Button size='small' color='primary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}

export default ProjectCard
