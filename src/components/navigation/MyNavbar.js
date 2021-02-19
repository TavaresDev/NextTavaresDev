import React from "react"

import Header from "./Header"
import { Grid, List, ListItem, Button } from "@material-ui/core"
// import HeaderLinks from './HeaderLinks'

const MyNavbar = () => {
	const dashboardRoutes = ["hey", "you"]
	return (
		<Header
			color='transparent'
			routes={dashboardRoutes}
			brand='Me'
			// rightLinks={<HeaderLinks />}
			
			fixed
			changeColorOnScroll={{
				height: 400,
				color: "white",
			}}
			leftLinks={
				<Grid container>
					<Grid Item xs={12} md={1} className=''>
						<Button
							href='#about'
							onClick={(e) => e.preventDefault()}
							color='transparent'>
							About
						</Button>
					</Grid>

					<Grid Item xs={12} md={1} className=''>
						<Button
							href='#pablo'
							onClick={(e) => e.preventDefault()}
							color='transparent'>
							Link
						</Button>
					</Grid>
				</Grid>
			}
		/>
	)
}

export default MyNavbar
