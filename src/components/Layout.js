import React from "react"
import { Grid, List, ListItem, Button } from "@material-ui/core"
import Footer from "./Footer"
import HideOnScroll from "./Navbar"
import ButtonAppBar from "./NavbarResponsive"
import PersistentDrawerRight from "./PersistentDrawerRight"
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer"
import MyNavbar from "./navigation/MyNavbar"

const Layout = ({ children }) => {
	
	return (
		<>
			<MyNavbar/>
			{/* <HideOnScroll/> */}
			{/* <ButtonAppBar/> */}
			{/* <PersistentDrawerRight/> */}
			{/* <SwipeableTemporaryDrawer/> */}
			<Grid className=''>{children}</Grid>
			<Footer />

		</>
	)
}

export default Layout

// {/* <Nav /> */}
// {children}

// {/* <Footer /> */}
