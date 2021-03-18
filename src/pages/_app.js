import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import darkTheme from "./../styles/themes/darkTheme"
import theme from "./../styles/themes/theme"
import Layout from "../components/shared/Layout"
import "../styles/globals.css"


export default function MyApp({ Component, pageProps }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])


	return (
		<React.Fragment>
			<Head>
				<title>Tavares Web Solutions</title>
				<meta name="description" content="We are a modern web development agency, using the best tech available to build solutions for your business. We create a fully functional custom solution for your business needs."></meta>
				<link rel="canonical" href="http://tavaresweb.com/" />
				<meta name="robots" content="index, follow"/>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
			
				<Layout>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</Layout>
				
			</ThemeProvider>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}
