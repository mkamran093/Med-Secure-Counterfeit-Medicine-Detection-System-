import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import companyLogo from "../../img/logo.png";
import starsImage from "../../img/Star.png";
import companyLogos from "../../img/logos.png";

const Companies = () => {
  const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <StyledContainer>
        <StyledBox>
          <img src={companyLogo} alt="Company logo" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,000 trust this company
          </Typography>
        </StyledBox>

        <Box>
          <img src={starsImage} alt="Stars" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </StyledContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={companyLogos} alt="Company logos" />
      </Container>
    </Box>
  );
};

export default Companies;

