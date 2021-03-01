import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card, Box } from "@material-ui/core"

import Button from "@material-ui/core/Button"


const useStyles = makeStyles({
	root: {

		// margin: "0px",
		// display: "inline-flex",
		// background: "rgba(200, 200, 200, 0.2)",
		// minWidth: 300,
		// maxWidth: 420,
		// background: "palette.primary.main",
		transition: "all .3s ease-in",
		"&:hover": {
			// background: green[200],
			// background: green[300],
			color: "white",
		},
		'& a': {
			textDecoration: "none",
			// padding: '1rem',
			// color:'white'

		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
	},
})

const NavbarLink = ({name}) => {
	const classes = useStyles()
	return (
		<Box className={classes.root} >
			<Button size="small" href='#about' color="secondary" onClick={(e) => console.log(e)} >
				{name}

			</Button>
		</Box>
	)
}

export default NavbarLink
