import userImg from "../../assets/img_avatar.png";
import { Link, NavLink } from "react-router-dom";
// import NavigationItem from "../layout/NavigationItem";
import "./sidebar.scss";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ListIcon from "@mui/icons-material/List";

function Sidebar() {
  const NAVIGATIONS = [
    {
      id: 1,
      icon: <DashboardIcon className="icon" />,
      title: "Dashboard",
      url: "/",
    },
    {
      id: 2,
      icon: <GroupsIcon className="icon" />,
      title: "Groups",
      url: "/groups/",
    },
    {
      id: 3,
      icon: <BadgeIcon className="icon" />,
      title: "Panelists",
      url: "/panelists/",
    },
    {
      id: 4,
      icon: <AccountCircleIcon className="icon" />,
      title: "Students",
      url: "/students/",
    },
    {
      id: 5,
      icon: <EventIcon className="icon" />,
      title: "Schedules",
      url: "/schedules/",
    },
    {
      id: 6,
      icon: <ListAltIcon className="icon" />,
      title: "Gradesheets",
      url: "/gradesheets/",
    },
    {
      id: 7,
      icon: <ListIcon className="icon" />,
      title: "Rubrics",
      url: "/rubrics/",
    },
  ];

  return (
    <div className="sidebar">
      <div className="top">
        <img src={userImg} alt="..." width="" className="userImage" />
        <div className="profile_info">
          <span className="username">
            <b>ADMIN</b>
          </span>
        </div>
      </div>

      <div className="bottom">
        <ul>
          <li>
            <NavLink to="/" end className="nav-link">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/groups/" end className="nav-link">
              <GroupsIcon className="icon" />
              <span>Groups</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/panelists/" end className="nav-link">
              <BadgeIcon className="icon" />
              <span>Panelists</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/students/" end className="nav-link">
              <AccountCircleIcon className="icon" />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedules/" end className="nav-link">
              <EventIcon className="icon" />
              <span>Schedules</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gradesheets/" end className="nav-link">
              <ListAltIcon className="icon" />
              <span>Gradesheets</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/rubrics/" end className="nav-link">
              <ListIcon className="icon" />
              <span>Rubrics</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
