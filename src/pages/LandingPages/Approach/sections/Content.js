// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import MKBox from "components/MKBox";

// Material Kit 2 React components

function Content() {
    return (
        <MKBox component="section" py={1} my={1}>
        <Container>
            <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="hail"
                title="Client-Centric Focus"
                description="We prioritize understanding your unique needs, tailoring each solution to ensure it aligns with your vision and business goals.                            "
                action={{
                  type: "external",
                  route: "https://www.investopedia.com/terms/c/client-centric.asp",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="businesscenter"
                title="Small to Medium Business Support"
                description="We empower small to medium businesses with reasonable IT solutions tailored to their needs and growth."
                action={{
                  type: "external",
                  route: "https://pivotino.com/blog/pivoblog-1/5-ways-to-increase-profits-for-small-medium-enterprises-smes-7",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="call"
                title="End-to-End Support"
                description="From consultation to implementation, we’re with you every step, ensuring smooth and successful project delivery."
                action={{
                  type: "external",
                  route: "https://www.investopedia.com/terms/e/end-to-end.asp#:~:text=End%2Dto%2Dend%20describes%20a,anything%20from%20a%20third%20party.",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="Allinclusiverounded"
                title="Agile Methodology"
                description="Our agile process adapts to changes efficiently, delivering results quickly and with flexibility."
                action={{
                  type: "external",
                  route: "https://www.atlassian.com/agile#:~:text=What%20is%20the%20Agile%20methodology,planning%2C%20executing%2C%20and%20evaluating.",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="lightbulbcircle"
                title="Innovation-Driven Solutions"
                description="Our agile process adapts to changes efficiently, delivering results quickly and with flexibility."
                action={{
                  type: "external",
                  route: "https://www.investopedia.com/terms/d/disruptive-innovation.asp",
                  label: "Learn More",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="handshake"
                title="Long-Term Partnerships"
                description="Each project starts a partnership, focused on support and continuous improvement for your success."
                action={{
                  type: "external",
                  route: "https://www.investopedia.com/terms/g/generalpartnership.asp",
                  label: "Learn More",
                }}
              />
            </Grid>

            </Grid>
        </Container>
        </MKBox>
    );
}

export default Content;