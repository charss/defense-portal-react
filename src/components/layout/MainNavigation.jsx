import userImg from "../../assets/img_avatar.png";
import NavigationItem from "./NavigationItem";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const NAVIGATIONS = [
    { title: "Dashboard", url: "/" },
    { title: "Groups", url: "/groups/" },
    { title: "Panelists", url: "/panelists/" },
    { title: "Students", url: "/students/" },
    { title: "Schedules", url: "/schedules/" },
    { title: "Gradesheets", url: "/gradesheets/" },
    { title: "Rubrics", url: "/rubrics/" },
  ];

  return (
    <nav className={` ${classes.nav}`}>
      <div className="">
        <img src={userImg} alt="..." width="" className="circleImage" />
        <div className="profile_info">
          <span className="username">
            <b>ADMIN</b>
          </span>
        </div>
      </div>
      {NAVIGATIONS.map((nav) => (
        <NavigationItem key={nav.title} nav={nav} />
      ))}
    </nav>
  );
}

export default MainNavigation;
