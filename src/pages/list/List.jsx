import { useState, useEffect } from "react";

import Datatable from "components/datatable/Datatable";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import Spinner from "react-bootstrap/Spinner";
import "./list.scss";
// import userImg from "assets/img_avatar.png";
import Api from "helper/api";
import {
  groupColumns,
  panelistColumns,
  studentColumns,
  templateColumns,
} from "../../datatablesource";

function List({ title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dataColumn, setDataColumn] = useState([]);
  const [setData, setLoadedData] = useState([]);

  const api = new Api();

  const fetchPanelists = () => {
    api
      .getPanelists()
      .then((response) => {
        return response["data"];
      })
      .then((data) => {
        const panelists = [];
        for (const key in data) {
          const panelist = {
            id: key,
            ...data[key],
          };

          panelists.push(panelist);
        }
        setIsLoading(false);
        setLoadedData(panelists);
      })
      .catch((err) => console.log(err));
  };

  const fetchGroups = () => {
    api
      .getGroups()
      .then((response) => {
        return response["data"];
      })
      .then((data) => {
        const groups = [];
        for (const key in data) {
          const group = {
            id: key,
            ...data[key],
          };

          groups.push(group);
        }
        setIsLoading(false);
        setLoadedData(groups);
      })
      .catch((err) => console.log(err));
  };

  const fetchStudents = () => {
    api
      .getStudents()
      .then((response) => {
        return response["data"];
      })
      .then((data) => {
        const students = [];
        for (const key in data) {
          const student = {
            id: key,
            ...data[key],
          };

          students.push(student);
        }
        setIsLoading(false);
        setLoadedData(students);
      })
      .catch((err) => console.log(err));
  };

  const fetchTemplates = () => {
    api
      .getTemplates()
      .then((response) => {
        return response["data"];
      })
      .then((data) => {
        const templates = [];
        for (const key in data) {
          const template = {
            id: key,
            ...data[key],
          };

          templates.push(template);
        }
        setIsLoading(false);
        setLoadedData(templates);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    if (title === "Panelists") {
      fetchPanelists();
      setDataColumn(panelistColumns);
    } else if (title === "Groups") {
      fetchGroups();
      setDataColumn(groupColumns);
    } else if (title === "Students") {
      fetchStudents();
      setDataColumn(studentColumns);
    } else if (title === "Gradesheets") {
      fetchTemplates();
      setDataColumn(templateColumns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  if (isLoading) {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar title={title} />
          <section>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar title={title} />
        <Datatable
          title={title}
          loadedData={setData}
          dataColumns={dataColumn}
          className="datatable"
        />
        <div className="footer">
          FEU Alabang - College of Computer Studies and Multimedia Arts
        </div>
      </div>
    </div>
  );
}

export default List;
