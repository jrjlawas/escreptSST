// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import Header from "pages/LandingPages/Approach/sections/Header";
import Content from "pages/LandingPages/Approach/sections/Content";
function Approach() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header/>
      <Content/>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Approach;
