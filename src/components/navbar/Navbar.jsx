import "./navbar.scss";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar({ title }) {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1 className="title">{title}</h1>
        <div className="items">
          {/* {title !== "Dashboard" && (
            <div className="search">
              <input type="text" name="" id="" placeholder="Search..." />
              <SearchOutlinedIcon />
            </div>
          )} */}
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              // eslint-disable-next-line no-undef
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
