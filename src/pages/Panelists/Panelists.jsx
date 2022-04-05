import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { useTitle } from "../../context/TitleContext";
import userImg from "../../assets/img_avatar.png";
import Api from "../../helper/api";
import "../../styles/global.css";
import "./Panelists.css";
import Spinner from "react-bootstrap/Spinner";

function PanelistsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [setPanelists, setLoadedPanelists] = useState([]);

  const api = new Api();
  const { setTitle } = useTitle();

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
        setLoadedPanelists(panelists);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPanelists();
    setTitle("Panelists");
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
        <title>Panelists</title>
      </Helmet>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Faculty Name</th>
            <th scope="col">Faculty Number</th>
            <th scope="col">School</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {setPanelists.map((panelist) => (
            <tr key={panelist.id}>
              <th>
                <img src={userImg} alt="..." className="circleImage" />
              </th>
              <td>
                {panelist.first_name} {panelist.last_name}
              </td>
              <td className="text-center">
                <span className="badge bg-success">{panelist.id}</span>
              </td>
              <td>{panelist.school}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default PanelistsPage;
