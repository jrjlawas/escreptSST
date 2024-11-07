// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
//import bgImage from "assets/images/city-profile.jpg";
import bgImage from "assets/images/escreptico/BG1.jpg";


function HeaderOne() {
  return (
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="40vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={0} lg={0} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h2"
              color="white"
              mb={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1xl"],
                },
              })}
            >
              Our Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8} pr={0} mr={0}>
            At ESCRept Software Solution Team, we believe that great technology is driven by great people. 
            Our team is a diverse group of experienced professionals who bring creativity, technical expertise, 
            and a passion for solving complex challenges to every project. With backgrounds across various fields of IT, 
            development, and consulting, we work collaboratively to create impactful solutions tailored to our clients’ unique needs.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;