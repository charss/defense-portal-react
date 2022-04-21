import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

// import { userColumns, userRows } from "../../datatablesource copy";
import { groupColumns, userColumns, userRows } from "../../datatablesource";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import PeopleIcon from "@mui/icons-material/People";
// import DeleteIcon from "@mui/icons-material/Delete";
import "./datatable.scss";

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
      paddingTop: 10,
      paddingBottom: 10,
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
  },
})(DataGrid);

function Datatable({ title, loadedData, dataColumns }) {
  const [data, setData] = useState(loadedData);
  const [pageSize, setPageSize] = useState(5);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div> */}
      <StyledDataGrid
        className="datagrid"
        rows={loadedData}
        // columns={dataColumns.concat(actionColumn)}
        columns={dataColumns}
        rowsPerPageOptions={[5, 10, 20, 100]}
        pagination
        // checkboxSelection
      />
    </div>
  );
}

export default Datatable;
