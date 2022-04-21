// import { Link } from "react-router-dom";
import userImg from "assets/img_avatar.png";
import feuALogo from "assets/feu_alabang_logo.png";
import feuTLogo from "assets/feu_tech_logo.png";
import feuDLogo from "assets/feu_diliman_logo.png";
import { editData } from "utils/utils";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import DeleteIcon from "@mui/icons-material/Delete";

export const groupColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Group Name",
    width: 200,
    flex: 1,
  },
  {
    field: "project_title",
    headerName: "Project Title",
    width: 230,
    flex: 2,
  },
  {
    field: "program",
    headerName: "Program",
    width: 100,
    flex: 0.75,
  },
  {
    field: "mentor",
    headerName: "Mentor",
    width: 160,
    flex: 1.25,
    renderCell: (params) => {
      if (params.row.mentor) {
        return (
          <div className="cellWithImg">
            <img src={userImg} alt="..." className="circleImage" />
            {params.row.mentor}
          </div>
        );
      }
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <EditIcon onClick={() => editData(params.row.id)} className="icon" />
          <PeopleIcon
            onClick={() => editData(params.row.id)}
            className="icon"
          />
          <DeleteIcon className="icon delete" />
          {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
        </div>
      );
    },
  },
];

export const panelistColumns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "full_name",
    headerName: "Faculty Name",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          <img src={userImg} alt="..." className="circleImage" />
          {params.row.last_name}, {params.row.first_name}{" "}
          {params.row.middle_in && `${params.row.middle_in}.`}
        </div>
      );
    },
  },
  {
    field: "school",
    headerName: "School",
    flex: 1,
    renderCell: (params) => {
      let logo = "";
      if (params.row.school === "FEU Alabang") {
        logo = feuALogo;
      } else if (params.row.school === "FEU Tech") {
        logo = feuTLogo;
      } else if (params.row.school === "FEU Diliman") {
        logo = feuDLogo;
      }
      console.log(logo);
      return (
        <div className="cellWithImg">
          <img src={logo} alt="..." className="schoolLogo" />
          {params.row.school}
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <EditIcon onClick={() => editData(params.row.id)} className="icon" />
          <DeleteIcon className="icon delete" />
          {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
        </div>
      );
    },
  },
];

export const studentColumns = [
  { field: "id", headerName: "Student Number", flex: 0.5 },
  {
    field: "full_name",
    headerName: "Student Name",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={userImg} alt="..." className="circleImage" />
          {params.row.full_name}
        </div>
      );
    },
  },
  {
    field: "group",
    headerName: "Group",
    flex: 1.2,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <EditIcon onClick={() => editData(params.row.id)} className="icon" />
          <DeleteIcon className="icon delete" />
          {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
        </div>
      );
    },
  },
];

export const templateColumns = [
  {
    field: "sheet_title",
    headerName: "Gradesheet Title",
    flex: 2,
  },
  {
    field: "sheet_type",
    headerName: "Type",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className={`templateType ${params.row.sheet_type}`}>
          {params.row.sheet_type}
        </div>
      );
    },
  },
  {
    field: "pbl_level",
    headerName: "PBL Level",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className={`pblLevel ${params.row.pbl_level}`}>
          {params.row.pbl_level}
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <EditIcon onClick={() => editData(params.row.id)} className="icon" />
          <VisibilityIcon className="icon" />
          <DeleteIcon className="icon delete" />
          {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
        </div>
      );
    },
  },
];
