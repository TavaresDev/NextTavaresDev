import React from "react"
import {
	Container,
	Grid,
	Paper,
	Box,
	Button,
	Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles((theme) => ({
	// section: {
	// 	width: "100%",
	// 	height: 600,
		
	// },
}))

const Contact = () => {
	const [value, setValue] = React.useState("")
	const handleChange = (event) => {
		setValue(event.target.value)
	}
	const classes = useStyles()
	return (
		<Container className={'sec'}>
			<Grid container>
				<Grid item xm={0} sm={3} />
				<Grid
					item
					container
					sm={12}
					md={6}
					direction='column'
					justify='center'
					alignItems='stretch'>
					<Box mb={5}>
						<Typography variant='h4' component='h2'>
							Get in touch
						</Typography>
					</Box>

					<TextField id='standard-basic' label='Name' />

					<TextField id='standard-basic' label='Email' />
					<TextField
						id='standard-multiline-flexible'
						label='Message'
						multiline
						rows={3}
						rowsMax={10}
						// value={value}
						// onChange={handleChange}
					/>
					<Box ml='auto' pt={2}>
						<Button variant='contained' color='primary'>
							Send
						</Button>
					</Box>
				</Grid>

				<Grid item xm={0} sm={3} />
			</Grid>
		</Container>
	)
}

export default Contact
