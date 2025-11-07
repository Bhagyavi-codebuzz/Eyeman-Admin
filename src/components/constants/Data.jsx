
import Dashboard from "../../assets/images/dashboard.svg";
import Partner from "../../assets/images/partner.svg";
import Category from "../../assets/images/category.svg";
import Applicant from "../../assets/images/applicant.svg";
import Intake from "../../assets/images/intake.svg";
// Sidebar
export const SidebarData = {
  superadmin: [
    {
      label: "Dashboard",
      icon: <img src={Dashboard} alt="dashboard" className="img-fluid" />,
      img: false,
      route: "/superadmin/dashboard",
    },
    {
      label: "Continents",
      icon: (
        <img
          src={Partner}
          alt="continents"
          className="img-fluid"
        />
      ),
      img: false,
      route: "/superadmin/continents",
    },
    {
      label: "Countries",
      icon: (
        <img
          src={Category}
          alt="countries"
          className="img-fluid"
        />
      ),
      img: false,
      route: "/superadmin/countries",
    },
    {
      label: "Places",
      icon: (
        <img
          src={Applicant}
          alt="places"
          className="img-fluid"
        />
      ),
      img: false,
      route: "/superadmin/place",
    },
  ]
};

// Dashboard
export const DashboardContent = {
  superadmin: [
    {
      title: "Total Continents",
      icon: (
        <img
          src={Partner}
          alt="DashUser"
          className="img-fluid"
        />
      ),
      apiCount: "continents",
      route: "/superadmin/dashboard",
    },
    {
      title: "Total Countries",
      icon: (
        <img
          src={Category}
          alt="cases-img"
          className="img-fluid"
        />
      ),
      apiCount: "countries",
      route: "/superadmin/dashboard",
    },
    {
      title: "Total Places",
      icon: (
        <img
          src={Applicant}
          alt="applicant-img"
          className="img-fluid"
        />
      ),
      apiCount: "places",
      route: "/superadmin/dashboard",
    },
    {
      title: "Total locations",
      icon: (
        <img
          src={Intake}
          alt="intake-img"
          className="img-fluid"
        />
      ),
      apiCount: "locations",
      route: "/superadmin/dashboard",
    },
  ],
};