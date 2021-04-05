import React from "react"
import { useRouter } from 'next/router'
import en from '../../../locales/en'
import pt from '../../../locales/pt'
import Header from "./Header"
import { Grid, List, ListItem, Button } from "@material-ui/core"
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles"
import styles from "./navbarsStyle.js"
import Image from "next/image"
import router from "next/router"

const useStyles = makeStyles(styles)
const MyNavbar = () => {
	const classes = useStyles()
	const logo = ``

	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : pt

	const changeLanguage = (e) => {
		const locale = e.target.value
		router.push('/', '/', { locale })
	}

	return (
		<Header
			brand={<Image
				src='/tLogo.png'
				width={44}
				alt="Brand Logo"
				height={40}></Image>}
			color='transparent'
			rightLinks={
				<List className={classes.list}>
					<ListItem className={classes.listItem}>
						<Select
							className={classes.navLink}
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={locale}
							onChange={changeLanguage}
						>
							<MenuItem value='en'>EN</MenuItem>
							<MenuItem value='pt'>PT</MenuItem>

						</Select>

					</ListItem>
				</List>
			}
			fixed
			changeColorOnScroll={{
				height: 400,
				color: "white",
			}}
			leftLinks={
				<List className={classes.list}>
					<ListItem className={classes.listItem}>
						<Button
							href='#services'
							className={classes.navLink + " "}
						// onClick={(e) => e.preventDefault()}
						>
							{t.navLink1}
						</Button>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Button
							href='#about'
							className={classes.navLink}
						>
							{t.navLink2}
						</Button>
					</ListItem>
					<ListItem className={classes.listItem}>
						<Button
							href='#contact'
							className={classes.navLink}
						// onClick={(e) => e.preventDefault()}
						>
							{t.navLink3}
						</Button>
					</ListItem>
				</List>
			}
		// leftLinks={
		// 	<Grid container>
		// 		<Grid item xs={12} md={1} className=''>
		// 			<NavbarLink name={"About"} />
		// 		</Grid>

		// 		<Grid item xs={12} md={1} alignContent='center' className=''>
		// 			<NavbarLink name={"Contact"} />
		// 		</Grid>
		// 	</Grid>
		// }
		/>
	)
}

export default MyNavbar
