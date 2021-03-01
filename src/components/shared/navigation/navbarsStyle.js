import {
	container,
	title,
	grayColor,
} from "../../../styles/nextjs-material-kit"

const navbarsStyle = (theme) => ({
	section: {
		padding: "70px 0",
		paddingTop: "0",
	},
	container,
	title: {
		...title,
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
	},
	navbar: {
		marginBottom: "-20px",
		zIndex: "100",
		position: "relative",
		overflow: "hidden",
		"& header": {
			borderRadius: "0",
		},
	},
	navigation: {
		backgroundPosition: "center center",
		backgroundSize: "cover",
		marginTop: "0",
		minHeight: "740px",
	},
	formControl: {
		[theme.breakpoints.down("md")]: {
			margin: "10px 0 0 15px !important",
			color: grayColor,
		},
		margin: "10px 0 0 0 !important",
		paddingTop: "0",
	},
	inputRootCustomClasses: {
		margin: "0!important",
	},
	searchIcon: {
		width: "20px",
		height: "20px",
		color: "inherit",
	},
	list: {
		fontSize: "14px",
		margin: 0,
		paddingLeft: "0",
		listStyle: "none",
		paddingTop: "0",
		paddingBottom: "0",
		color: "inherit",
	},
	listItem: {
		float: "left",
		color: "inherit",
		position: "relative",
		display: "block",
		width: "auto",
		margin: "0",
		padding: "0",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			"&:after": {
				width: "calc(100% - 30px)",
				content: '""',
				display: "block",
				height: "1px",
				marginLeft: "15px",
				backgroundColor: "#e5e5e5",
			},
		},
	},
	listItemText: {
		padding: "0 !important",
	},
	navLink: {
		color: "inherit",
		position: "relative",
		padding: "0.9375rem",
		fontWeight: "400",
		fontSize: "12px",
		textTransform: "uppercase",
		borderRadius: "3px",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px",
		display: "inline-flex",
		"&:hover,&:focus": {
			color: "inherit",
			background: "rgba(200, 200, 200, 0.2)",
		},
		[theme.breakpoints.down("sm")]: {
			width: "calc(100% - 30px)",
			marginLeft: "15px",
			marginBottom: "8px",
			marginTop: "8px",
			textAlign: "left",
			"& > span:first-child": {
				justifyContent: "flex-start",
			},
		},
	},
	img: {
		width: "40px",
		height: "40px",
		borderRadius: "50%",
	},
	imageDropdownButton: {
		[theme.breakpoints.down("md")]: {
			top: "0",
			margin: "5px 15px",
		},
		padding: "0px",
		top: "4px",
		borderRadius: "50%",
		marginLeft: "5px",
	},
})

export default navbarsStyle
