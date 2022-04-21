import "./rubriccard.scss";
import moment from "moment";
import { Link } from "react-router-dom";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MeatballMenu from "components/meatball/MeatballMenu";

function RubricCard({ data }) {
  return (
    <div className="card">
      <div className="top">
        <h1>{data.desc}</h1>
      </div>
      <div className="center">
        <div className="child">
          <h6>Rubric Type</h6>
          <h5>{data.rubric_type}</h5>
        </div>
        <div className="child">
          <h6>Category</h6>
          <h5>{data.category}</h5>
        </div>
        {data.rubric_type === "Group" && (
          <div className="child">
            <h6>PBL Level</h6>
            <h5>{data.pbl_lvl}</h5>
          </div>
        )}
        <div className="child">
          <h6>Weight</h6>
          <h5>x{data.weight}</h5>
        </div>
      </div>
      <div className="bottom">BOTTOM</div>
    </div>
  );
}

export default RubricCard;
