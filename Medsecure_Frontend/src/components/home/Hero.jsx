import { Box, Typography, Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import bgImg from "../../img/bg.png";
import heroImg from "../../img/hero_illustration.png";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: "#80bfff", minHeight: "100vh" }}>
      <Container>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            marginTop: 0,
          }}
        >
          <Box sx={{ flex: "2" }}>
            <Typography
              variant="body2"
              marginTop="0px"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 1,
                mb: 0,
              }}
            >
              Welcome to MedSecure
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "40px", md: "64px" },
                color: "#000336",
                fontWeight: "bold",
                marginY: 4,
              }}
            >
              Securely Authenticate Your Medicines with MedSecure
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 2 }}
            >
              Our blockchain-based drug identification system provides a secure
              and reliable way to authenticate your medicines and protect
              against counterfeit drugs.
            </Typography>
            <Link to="/scanner" style={{ textDecoration: "none" }}>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Scan QR"
                heroBtn={true}
                marginBottom="5rem"
              />
            </Link>
          </Box>
          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

