import React from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import styles from "./footer.module.css"

const Footer = () => {

	const year = new Date().getFullYear()
	return (
		<Box className={styles.footer} mt={10} p={3} bgcolor='secondary.light'>
			<Box component='footer'>

				<Typography align='center'>Developed By <a className='footerLink' href="https://www.andretavares.dev/" target="_blank">
							Andre Tavares</a> &copy; {year}
				</Typography>
				
			</Box>
		</Box>
	)
}

export default Footer
