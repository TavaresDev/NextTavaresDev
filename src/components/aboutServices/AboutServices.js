import { Box, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import SimpleCard from "./ProductCard"

import WebIcon from "@material-ui/icons/Web"
import StoreIcon from "@material-ui/icons/Store"

const AboutServices = () => {
	const myItems = [{ name: "item 1" }, { name: "item2" }]
	const textBullets = [
		"bulet point 1 ",
		"bulet point 2 uahsuahsa ",
		"bulet point 3 more something ",
		"bulet point 4 something more hero",
	]
	const text = "bulet point 1 , bulet point 2 "
	const ecommerceText = "Display your inventory"
	const ecommerceText2 = "Sell your product"
	const ecommerceText3 = "Expand your reach"

	return (
		<Container className='sec'>
			<Grid container>
				<Grid item xs={12} align='start'>
					<Typography variant={"h3"}>
						<Box fontWeight=''>What we do</Box>
					</Typography>
					{/* <Typography variant={"h5"}>value proop</Typography> */}
				</Grid>
				<Grid item xs={12}>
					<Box m={10}>
						{/* <Typography variant={"h5"}>Products</Typography> */}
					</Box>
				</Grid>
				<Grid item container spacing={4} className=''>
					<Grid item xs={12} md={6} align='center'>
						<SimpleCard
							icon={<WebIcon fontSize="large" />}
							title={"Landing Page"}
							adjective={"Fast, Reliable, SEO focused"}
							text={text}
						/>
					</Grid>
					<Grid item xs={12} md={6} align='center'>
						<SimpleCard
						icon={<StoreIcon fontSize="large"/>}
							title={"Ecommerce"}
							adjective={"Fast, Reliable, SEO focused"}
							text={ecommerceText}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutServices
