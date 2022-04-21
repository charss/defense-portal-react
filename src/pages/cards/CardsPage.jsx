import { useState, useEffect } from "react";

import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import Spinner from "react-bootstrap/Spinner";
import "./cardspage.scss";
// import userImg from "assets/img_avatar.png";
import Api from "helper/api";
import ScheduleCard from "components/card/ScheduleCard";
import RubricCard from "components/card/RubricCard";

function CardsPage({ title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [setData, setLoadedData] = useState([]);

  const api = new Api();

  const fetchSchedules = () => {
    api
      .getScedules()
      .then((response) => {
        return response["data"];
      })
      .then((data) => {
        const schedules = [];
        for (const key in data) {
          const schedule = {
            id: key,
            ...data[key],
          };

          schedules.push(schedule);
        }
        setIsLoading(false);
        setLoadedData(schedules);
      })
      .catch((err) => console.log(err));
  };

  const fetchRubrics = () => {
    api
      .getRubrics()
      .then((response) => {
        return response["data"];
      })
      .then((data) => {
        const rubrics = [];
        for (const key in data) {
          const rubric = {
            id: key,
            ...data[key],
          };

          rubrics.push(rubric);
        }
        setIsLoading(false);
        setLoadedData(rubrics);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    if (title === "Schedules") {
      fetchSchedules();
    } else if (title === "Rubrics") {
      fetchRubrics();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  console.log(setData);

  if (isLoading) {
    return (
      <div className="cards">
        <Sidebar />
        <div className="cardsContainer">
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
    <div className="cards">
      <Sidebar />
      <div className="cardsContainer">
        <Navbar title={title} />
        <div className="content">
          {setData.map((data) => {
            if (title === "Schedules") {
              return <ScheduleCard key={data.id} data={data} />;
            } else if (title === "Rubrics") {
              return <RubricCard key={data.id} data={data} />;
            } else {
              return 0;
            }
          })}
        </div>
        <div className="footer">
          FEU Alabang - College of Computer Studies and Multimedia Arts
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
