import React from "react"
import { Grid } from "@material-ui/core"
import Footer from "./Footer"
import HideOnScroll from "./Navbar"
import ButtonAppBar from "./NavbarResponsive"
import PersistentDrawerRight from "./PersistentDrawerRight"
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer"

const Layout = ({ children }) => {
	return (

		<>
		<HideOnScroll/>
		{/* <ButtonAppBar/> */}
		{/* <PersistentDrawerRight/> */}
		<SwipeableTemporaryDrawer/>
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