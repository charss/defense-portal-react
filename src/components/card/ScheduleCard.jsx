import "./schedulecard.scss";
import moment from "moment";
import { Link } from "react-router-dom";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MeatballMenu from "components/meatball/MeatballMenu";

function ScheduleCard({ data }) {
  const { schedule_type, proposals } = data;
  const startDate = moment(data.start_date).utc().format("MMM. DD, YYYY");

  const startTime = moment(data.start_date).utc().format("hh:mm A");
  const endTime = moment(data.end_date).utc().format("hh:mm A");

  return (
    <div className="card">
      <div className="left">
        <div className="top">
          <h1>{startDate}</h1>
          <div>
            {startTime} - {endTime}
          </div>
          <div>Type: {data.schedule_type}</div>
          <div>
            Status:{" "}
            <span className={`status ${data.isactive ? "Active" : "Done"}`}>
              {data.isactive ? "Active" : "Done"}
            </span>
          </div>
          <div>
            Program: <span>{data.group_program}</span>
          </div>
        </div>

        <div className="bottom">
          <a
            target="_blank"
            className="btn btn-outline-dark btn-sm btn-block"
            href="https://drive.google.com/file/d/185lgERTZrqm7myT52NQDK39Ly9UlA_cB/view?usp=sharing"
            rel="noreferrer"
            aria-label="Zoom"
          >
            Documentation Link
          </a>
          <a
            target="_blank"
            className="btn btn-outline-dark btn-sm btn-block"
            href="https://feutech-edu-ph.zoom.us/j/92065947023 "
            rel="noreferrer"
            aria-label="Zoom"
          >
            Zoom Link
          </a>
          <Link
            target="_blank"
            className="btn btn-outline-dark btn-sm btn-block"
            to="/grade_summary/69/home"
          >
            Defense Summary
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <h1>
            {schedule_type === "Thesis Defense"
              ? data.project_title
              : data.group_name}
          </h1>
          {schedule_type === "Thesis Defense" && (
            <div className="groupName">by: {data.group_name}</div>
          )}
          <MeatballMenu />
        </div>
        <div className="moreInfo">
          <div className="section panels">
            <h5>PANELS</h5>
            <div className="panel">
              <div className="name">Irish Juanatas</div>
              <div className="role">Head Panel</div>
            </div>
            <div className="panel">
              <div className="name">Joferson Bombasi</div>
              <div className="role">Co-Panelist</div>
            </div>
            <div className="panel">
              <div className="name">Ian Tiao</div>
              <div className="role">Co-Panelist</div>
            </div>
          </div>
          <div className="divider"></div>
          {schedule_type === "Title Defense" && (
            <>
              <div className="section titleProposals">
                <h5>TITLE PROPOSALS</h5>
                <div className="proposal">
                  {proposals.title1 !== "" && (
                    <a
                      href={proposals.docu_link1}
                      target="_blank"
                      rel="noreferrer"
                      className="title"
                    >
                      <div className={`remark ${proposals.title1_remarks}`}>
                        {proposals.title1_remarks ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </div>
                      <div className="title">{proposals.title1}</div>
                    </a>
                  )}
                </div>
                <div className="proposal">
                  {proposals.title2 !== "" && (
                    <a
                      href={proposals.docu_link2}
                      target="_blank"
                      rel="noreferrer"
                      className="title"
                    >
                      <div className={`remark ${proposals.title2_remarks}`}>
                        {proposals.title2_remarks ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </div>
                      <div className="title">{proposals.title2}</div>
                    </a>
                  )}
                </div>
                <div className="proposal">
                  {proposals.title3 !== "" && (
                    <a
                      href={proposals.docu_link3}
                      target="_blank"
                      rel="noreferrer"
                      className="title"
                    >
                      <div className={`remark ${proposals.title3_remarks}`}>
                        {proposals.title3_remarks ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </div>
                      <div className="title">{proposals.title3}</div>
                    </a>
                  )}
                </div>
              </div>
              <div className="divider"></div>
            </>
          )}
          <div className="section gradesheets">
            <h5>GRADESHEETS</h5>
            <div className="child">
              <h6>IT/CS/BMA Individual Gradesheet for PBL2 and PBL3</h6>
              <div className="buttons">
                <Link
                  to="#"
                  className="btn btn-outline-dark btn-block"
                  // onclick='open_assign_overlay(69, "Thesis Defense", "Individual", 1)'
                >
                  Assign Individual
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-dark"
                  href="/view_sheet/1/sched"
                >
                  View Individual
                </Link>
              </div>
            </div>
            <div className="child">
              <h6>BSIT/BSCS Group Gradesheet for PBL3</h6>
              <div className="buttons">
                <Link
                  to="#"
                  className="btn btn-outline-dark btn-block"
                  // onclick='open_assign_overlay(69, "Thesis Defense", "Group", 6)'
                >
                  Assign Group
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-dark"
                  href="/view_sheet/6/sched"
                >
                  View Group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
