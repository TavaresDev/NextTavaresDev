import React from "react"
import PropTypes from "prop-types"
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"

function HideOnScroll(props) {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined })

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
}

export default function HideAppBar(props) {
	return (
		<React.Fragment>
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<Box px={2}>
							<Typography variant='h6'>Tavares</Typography>
						</Box>
						<Typography variant='h6'>
							<a href='#about'>About</a>
						</Typography>
						<Button color='inherit'><a href='#about'>About</a></Button>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	)
}
