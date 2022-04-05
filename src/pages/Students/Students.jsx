import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useTitle } from "../../context/TitleContext";
import userImg from "../../assets/img_avatar.png";
import Api from "../../helper/api";
import "../../styles/global.css";
import Spinner from "react-bootstrap/Spinner";

function StudentsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [setStudents, setLoadedStudents] = useState([]);

  const api = new Api();
  const { setTitle } = useTitle();

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
        setLoadedStudents(students);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchStudents();
    setTitle("Students");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <section>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </section>
    );
  }

  return (
    <section className="">
      <Helmet>
        <title>Students</title>
      </Helmet>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Number</th>
            <th scope="col">Group</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {setStudents.map((student) => (
            <tr key={student.id}>
              <th>
                <img src={userImg} alt="..." className="circleImage" />
              </th>
              <td>
                <span>
                  {student.last_name}, {student.first_name}
                  {student.middle_in && ` ${student.middle_in[0]}.`}
                </span>
                {/* {student.first_name} {student.last_name} */}
              </td>
              <td>
                <span className="badge bg-success">{student.id}</span>
              </td>
              <td>{student.group}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentsPage;
