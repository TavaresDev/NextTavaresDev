import React from "react"
import { Grid, List, ListItem, Button } from "@material-ui/core"
import Footer from "./Footer"
import MyNavbar from "./navigation/MyNavbar"


const Layout = ({ children }) => {
	
	return (
		<>
			<MyNavbar/>
			<Grid className=''>{children}</Grid>
			<Footer />

		</>
	)
}

export default Layout

// {/* <Nav /> */}
// {children}

// {/* <Footer /> */}
