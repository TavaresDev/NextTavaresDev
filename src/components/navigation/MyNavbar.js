import React from "react"

import Header from "./Header"
import { Grid, List, ListItem, Button } from "@material-ui/core"


import { makeStyles } from "@material-ui/core/styles";
import styles from "./navbarsStyle.js";

const useStyles = makeStyles(styles);
const MyNavbar = () => {

	const classes = useStyles();

	return (
		<Header
			brand='Me'
			color='transparent'
			// rightLinks={<HeaderLinks />}
			fixed
			changeColorOnScroll={{
				height: 400,
				color: "white",
			}}
			leftLinks={
				<List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink + " " }
                    onClick={e => e.preventDefault()}
                  
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                  
                  >
                    Profile
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                  
                  >
                    Settings
                  </Button>
                </ListItem>
              </List>
			}
			// leftLinks={
			// 	<Grid container>
			// 		<Grid Item xs={12} md={1} className=''>
			// 			<NavbarLink name={"About"} />
			// 		</Grid>

			// 		<Grid Item xs={12} md={1} alignContent='center' className=''>
			// 			<NavbarLink name={"Contact"} />
			// 		</Grid>
			// 	</Grid>
			// }
		/>
	)
}

export default MyNavbar
