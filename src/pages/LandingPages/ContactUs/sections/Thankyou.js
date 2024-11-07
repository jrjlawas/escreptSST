// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
                Thank You for Reaching Out!
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
            Your inquiry has been successfully submitted. Our team at ESCRept Software Solution Team appreciates your interest 
            and will review your message promptly. We are excited to learn more about your needs and explore how we can assist 
            you with innovative, tailored IT solutions.
            </MKTypography>
            <MKTypography
              component="a"
              href="/pages/landing-pages/home"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                <MKTypography variant="h6" my={1}>
                    What’s Next?
                </MKTypography>
                    A team member will reach out within 1–2 business days to discuss your inquiry and address any questions you may have.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                    <MKTypography variant="h6" my={1}>
                        Need Immediate Assistance?
                    </MKTypography>
                    For urgent inquiries, please call us at (+63) 927 757 470.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                    <MKTypography variant="h6" my={1}>
                        Stay Connected
                    </MKTypography>
                    Follow us on social media to get the latest updates and insights from ESCRept.
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;