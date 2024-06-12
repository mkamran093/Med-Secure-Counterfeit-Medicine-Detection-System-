import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import illustrationImg from "../../img/illustration.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3),
      width: "90%",
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    margin: theme.spacing(0, 2),
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  }));

  return (
    <StyledBox>
      <StyledContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Featured Products
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Everything you need to know about supply chain traceability!
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box>

        <img
          src={illustrationImg}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </StyledContainer>
    </StyledBox>
  );
};

export default GetStarted;

