import React from "react";
import { Container, Box } from "@mui/material";

const RegistrationForm: React.FC = () => {
	return (
		<>
			<Container
				component="header"
				maxWidth={false}
				sx={{
					position: "fixed",
					top: 0,
					width: "100%",
					bgcolor: "black",
					zIndex: 1100,
					height: { xs: 75, sm: 100 },
					left: 0,
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					src="images/PSC_logo.png"
					alt="PSC Logo"
					sx={{
						height: 75,
						pt: 0.5,
						pb: 0.5,
					}}
				/>
			</Container>

			<Box
				sx={{
					position: "fixed",
					display: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					backgroundImage: "url('images/BGImg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					zIndex: -1,
				}}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					width: "125vw",
					height: "90vh",
					backgroundImage: "url('images/NotYetText.png')",
					backgroundSize: "contain",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					marginTop: { xs: "75px", small: "50px" },
					zIndex: -1,
				}}
			/>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100vw",
					minHeight: "1000px",
					overflow: { xs: "auto", sm: "none" },
					paddingTop: { xs: "115px", sm: "0px" },
					paddingBottom: "0px",
					boxSizing: "border-box",
					mt: { xs: 10, sm: 0 },
				}}
				className={"registration-form-container"}
			></Box>
		</>
	);
};

export default RegistrationForm;
