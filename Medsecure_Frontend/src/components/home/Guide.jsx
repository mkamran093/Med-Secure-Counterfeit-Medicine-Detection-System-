import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";

const Guide = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5rem",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it works?
      </Typography>

      <StyledBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Our system for detecting counterfeit medicine uses blockchain technology to assign a unique digital ID to each medicinal product, which is then recorded on the blockchain. Consumers can scan the product's QR code to verify its authenticity and ensure it hasn't been tampered with or counterfeited. By leveraging the security and transparency of blockchain, our system provides a reliable and efficient means to combat product counterfeiting and protect consumer safety and trust.
        </Typography>
      </StyledBox>

      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      />
    </Box>
  );
};

export default Guide;

