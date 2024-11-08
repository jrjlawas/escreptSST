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
              Our Approach
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8} pr={0} mr={0}>
                At ESCRept Software Solution Team, our approach to software development and 
                IT consultancy is designed to maximize impact, efficiency, and client satisfaction. 
                We believe that each project is unique and deserves a tailored, strategic approach 
                that aligns with our client’s vision and goals.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;