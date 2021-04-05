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
import Image from "next/image"

const useStyles = makeStyles({
	root: {
		position: 'relative',
		maxWidth: 355,
		minWidth: 305,
		minHeight: 570,
        margin:'1rem',
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
		transition: "all .3s ease-in",
		"&:hover": {
			boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
			// background: green[200],
			background: green[500],
			color: "white",
		},
		
	},
	posBottom: {
		position: 'absolute',
		// padding:'1rem',
		bottom: "1rem",
		// left: "px",
		right: "1rem",
		// marginBottom: 34,
	},
	button: {
		// display: "inline-block",
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
		fontSize:'0.8rem',
		// marginLeft: "auto",
		// marginRight: "0.5rem",
		// marginBottom: "0.5rem",
		// padding: "0.6rem",
		// borderRadius: "5px",
		// color:'#fff',
		textTransform: 'capitalize',
		
		// backgroundColor: '#C4C4C4',
		// backgroundColor: '#686767',
		
		"&:hover": {
			// boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
			// background: green[200],

			// backgroundColor: '#888',
			// backgroundColor: '#4F4F4F',


		},
		
	},
})


const ProjectCard = ({title, bodyText, imgAlt, img, link, button}) => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt={imgAlt}
					height='360'
					// width='380'
					image={img}
					title={imgAlt}
				/>
				{/* <Image
		src={img}
		
					alt={imgAlt}
					height='380'
					width='380'
							layout='responsive'
					title={imgAlt}
				/> */}
			</CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{bodyText}
					</Typography>
				</CardContent>
			<CardActions className={classes.posBottom}  >
				<a href={link} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
				<Button className={classes.button} variant ='contained' color='primary' size='small'>
					{button}
				</Button>
				</a>
				{/* <Button size='small' color='secondary'>
					Learn More
				</Button> */}

			</CardActions>
		</Card>
	)
}

export default ProjectCard
