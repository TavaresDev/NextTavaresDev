import { Grid, Box, Typography } from "@material-ui/core"
import React from "react"

const Footer = () => {

	const year = new Date().getFullYear()
	return (
		<Box mt={10} p={3} bgcolor='secondary.light'>
			<Box component='footer'>

				<Typography align='center'>Developed By <a href="https://www.andretavares.dev/" target="_blank">
							Andre Tavares</a> &copy; {year}
				</Typography>
				
			</Box>
		</Box>
	)
}

export default Footer
