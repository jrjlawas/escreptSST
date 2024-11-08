// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import escreptLogo from "assets/images/escreptico/icon.png"

const date = new Date().getFullYear();
// eslint-disable-next-line
export default {
  brand: {
    name: "ESCRept SST",
    image: escreptLogo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=61562082383228",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/pages/landing-pages/home" },
        { name: "our team", href: "/pages/landing-pages/team" },
        { name: "our approach", href: "/pages/landing-pages/approach" },
      ],
    },
    {
      name: "services",
      items: [
        { name: "it consultancy", href: "https://iradesign.io/" },
        { name: "web development", href: "https://www.creative-tim.com/bits" },
        { name: "BI Reporting and Support", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" }
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" }
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} ESCRept Software Solutions Team
    </MKTypography>
  ),
};
