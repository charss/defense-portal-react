import "./meatballmenu.scss";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { MenuUnstyled } from "@mui/base";

export default function MeatballMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scheduleMenu = [
    {
      id: 1,
      name: "Edit",
      icon: <EditIcon className="menuIcon" />,
    },
    {
      id: 2,
      name: "Update Status",
      icon: <ToggleOffIcon className="menuIcon" />,
    },
  ];

  return (
    <div className="meatballMenu">
      <MoreVertIcon
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="icon"
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="menu"
      >
        {scheduleMenu.map((menu) => {
          return (
            <MenuItem key={menu.id} onClick={handleClose} className="menuItem">
              {menu.icon}
              {menu.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
