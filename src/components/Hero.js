import React from "react"


import LazyHero from "react-lazy-hero"
// http://react-lazy-hero.danielstefanovic.com/

const Hero = ({ heroTitle, subTitle }) => {
	return (
		<LazyHero
			imageSrc='https://unsplash.it/2000/2000'
			color='blue'
			minHeight='80vh'
			opacity={Number(0.4)}
			parallaxOffset= {Number(0.4)}>
                
                <h1 className='text-light' >{heroTitle}</h1>
                <h3>{subTitle}</h3>
		</LazyHero>
	)
}

export default Hero
