// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

import Teams from "pages/LandingPages/Team/sections/Team";
import Header from "pages/LandingPages/Team/sections/Header"


import routes from "routes";

function Team() {
    return (
      <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header/>
      <Teams/>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </>
    );
}
export default Team;