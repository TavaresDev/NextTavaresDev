import React, { useState } from "react"
import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'
import { Container, Grid, Box, Button, Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import emailjs from "emailjs-com"
import ContactModal from "./ContactModal"

import Fade from "react-reveal/Fade"

const Contact = () => {
	//i18n
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : pt

	const [isContactModalOpen, setIsContactModalOpen] = useState(false)
	const closeModal = () => {
		setIsContactModalOpen(false)
		console.log("close")
		document.getElementById("contactForm").reset()
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
					setIsContactModalOpen(true)
				},
				(error) => {
					console.log(error.text)
				}
			)
		// e.target.reset()
	}

	return (
		<Container id='contact' className='sec'>
			<Fade bottom cascade>
				<Grid container>
					<Grid item xm={0} sm={2} md={2} lg={3} />
					<Grid
						item
						container
						sm={12}
						md={8}
						lg={6}
						direction='column'
						justify='center'
						alignItems='stretch'
						id='contactForm'
						component='form'
						onSubmit={sendEmail}>
						<Container>
							<Box mb={5}>
								<Typography variant='h4' component='h2'>
									{t.contactTitle}
								</Typography>
							</Box>
						</Container>
						<Container>
							<Grid
								item
								container

								direction='column'
								justify='center'
								alignItems='stretch'>
								<TextField color='secondary' id='' label={t.contactName} name='client_name' required />

								<TextField
									color='secondary'
									id='standard-basic'
									label={t.contactEmail}
									name='client_email'
									required
								/>
								<TextField
									color='secondary'
									required
									id='standard-multiline-flexible'
									label={t.contactMessage}
									multiline
									rows={3}
									rowsMax={10}
									name='client_message'
								/>
								<Box ml='auto' pt={3}>
									<Button
										type='submit'
										size='small'
										variant='contained'
										color='primary'>
										{t.contactButton}
									</Button>
								</Box>
							</Grid>
						</Container>
					</Grid>

					<Grid item xm={0} sm={2} md={2} lg={3} />
				</Grid>
			</Fade>
			{isContactModalOpen && <ContactModal closeModal={closeModal} />}
		</Container>
	)
}

export default Contact
