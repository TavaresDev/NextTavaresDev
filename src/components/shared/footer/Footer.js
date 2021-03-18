import React from "react"
import { useRouter } from 'next/router'
import en from '../../../locales/en'
import pt from '../../../locales/pt'
import { Grid, Box, Typography } from "@material-ui/core"
import styles from "./footer.module.css"

const Footer = () => {
	//i18n
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : pt

	const year = new Date().getFullYear()
	return (

		<Box className={styles.footer} mt={10} p={3} bgcolor='secondary.light'>
			<Box component='footer'>

				<Typography align='center'>{t.footer} <a className='footerLink' href="https://www.andretavares.dev/" target="_blank">
					André Tavares</a> &copy; {year}
				</Typography>

			</Box>
		</Box>
	)
}

export default Footer
