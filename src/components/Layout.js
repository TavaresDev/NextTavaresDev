import React from "react"
import { Grid } from "@material-ui/core"
import Footer from "./Footer"
import HideOnScroll from "./Navbar"

const Layout = ({ children }) => {
	return (

		<>
		<HideOnScroll/>
		<Grid  className=''>

		{children}

	
		</Grid>
		<Footer/>
		</>
	)
}

export default Layout


			// {/* <Nav /> */}
			// {children}

			// {/* <Footer /> */}