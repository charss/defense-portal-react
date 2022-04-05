import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Spinner from "react-bootstrap/Spinner";

import { useTitle } from "context/TitleContext";
import Api from "helper/api";
import "styles/global.css";

function GroupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [setGroups, setLoadedGroups] = useState([]);

  const api = new Api();
  const { setTitle } = useTitle();

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
        setLoadedGroups(groups);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchGroups();
    setTitle("Groups");
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
        <title>Groups</title>
      </Helmet>

      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Group Name</th>
            <th scope="col">Project Title</th>
            <th scope="col">Program</th>
            <th scope="col">Mentor</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {setGroups.map((group) => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.project_title}</td>
              <td>{group.program}</td>
              <td>
                {group.mentor && (
                  <span>
                    {group.mentor.last_name}, {group.mentor.first_name}
                    {group.mentor.middle_in && ` ${group.mentor.middle_in}.`}
                  </span>
                )}
                {!group.mentor && "No mentor"}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default GroupsPage;
