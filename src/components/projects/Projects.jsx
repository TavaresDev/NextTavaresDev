import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, Box, Grid, Container, Paper } from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { blue, green, grey } from "@material-ui/core/colors"
import ProjectCard from "./ProjectCard"

const useStyles = makeStyles({
	// root: {
	// 	minWidth: 300,
	// 	maxWidth: 420,
	// 	background: "palette.primary.main",
	// 	transition: "all .3s ease-in",
	// 	"&:hover": {
	// 		// background: green[200],
	// 		background: green[500],
	// 		color: "white",
	// 	},
	// 	bullet: {
	// 		display: "inline-block",
	// 		margin: "0 50px",
	// 		transform: "scale(0.8)",
	// 	},
	// 	title: {
	// 		fontSize: 14,
	// 	},
	// 	pos: {
	// 		marginBottom: 34,
	// 	},
	// },
})

const Projects = () => {
	const classes = useStyles()
	return (
		<Container id='services' className='sec' >
            

			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}>
						{[0, 1, 2].map((value) => (
                            <Grid key={value} item>
								<Paper className={classes.paper}>
									<ProjectCard />
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>

			</Grid>
               
		</Container>
	)
}

export default Projects
