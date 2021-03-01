import React from "react"
import { Container, Grid, Box, Button, Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import emailjs from "emailjs-com"

const Contact = () => {
	const [value, setValue] = React.useState("")

	const handleChange = (event) => {
		setValue(event.target.value)
		console.log("p_ID")
	}
	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
				process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
				e.target,
				process.env.NEXT_PUBLIC_YOUR_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	return (
		<Container className={"sec"}>
			<Grid container>
				<Grid item xm={0} sm={3} />
				<Grid
					item
					container
					sm={12}
					md={6}
					direction='column'
					justify='center'
					alignItems='stretch'
					component='form'
					onSubmit={sendEmail}>
					<Box mb={5}>
						<Typography variant='h4' component='h2'>
							Get in touch
						</Typography>
					</Box>

					<TextField id='' label='Name' name='client_name' />

					<TextField id='standard-basic' label='Email' name='client_email' />
					<TextField
						id='standard-multiline-flexible'
						label='Message'
						multiline
						rows={3}
						rowsMax={10}
						name='client_message'
					/>
					<Box ml='auto' pt={2}>
						<Button type='submit' variant='contained' color='primary'>
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
