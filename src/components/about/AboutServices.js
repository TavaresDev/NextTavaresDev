import { Box, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import SimpleCard from "./ProductCard"




const AboutServices = () => {

    const myItems = [{ name: 'item 1' }, { name: 'item2' }];
    const textBullets = ['bulet point 1 ', 'bulet point 2 uahsuahsa ', 'bulet point 3 more something ', 'bulet point 4 something more hero']
    const text = 'bulet point 1 , bulet point 2 uahsuahsa , bulet point 3 more something  bulet point 4 something more hero'
    
	return (
		<Container className='sec'>
			<Grid container  >
				<Grid item xs={12}  align='center'>
					<Typography variant={"h2"} >
						What we do
					</Typography>
					<Typography variant={"h5"} >
						value proop
					</Typography>
				</Grid>
				<Grid item xs={12} >
					<Box m={3}>
						<Typography variant={"h5"}>Products</Typography>
					</Box>
				</Grid>
				<Grid item container  spacing={4} xs={12} className=''>
					<Grid item xs={12} md={6} align='center'  >
	
                        <SimpleCard title={'Landing Page'} adjective={'Fast, Reliable, SEO facused'}  text={text}/>
					</Grid>
					<Grid item xs={12} md={6} align='center'  >

                        <SimpleCard title={'Ecommerce'} adjective={'Fast, Reliable, SEO facused'}  text={text}/>
             
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutServices
