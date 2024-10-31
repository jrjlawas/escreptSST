/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images

import jerrods from "assets/images/team/jerrods.jpg";
import jay from "assets/images/team/jrlawas.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
                ESCRept executive team brings decades of combined experience in delivering top-tier software solutions.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={jerrods}
                name="Jhonree Rodriguez"
                position={{ color: "info", label: "CEO and Founder" }}
                description="With over 10 years of experience, Jhonree Rodriguez leads ESCRept with a commitment to delivering high-quality, innovative software solutions. Under his leadership, ESCRept has grown to meet the evolving needs of clients across industries."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={jay}
                name="Jay Romel Lawas"
                position={{ color: "info", label: "Technical Lead Developer" }}
                description="With 7 years in the industry, Jay Romel Lawas leads Software Development Life Cycle processes and offers strategic technology consultations. His focus on innovation and quality solutions has made him a trusted resource for clients across industries."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
