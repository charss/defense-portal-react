import "./home.scss";

import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
import Widget from "components/widget/Widget";

function Home({ title }) {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar title={title} />
        <div className="widgets">
          <Widget type="activeSchedule" />
          <Widget type="upcomingSchedule" />
        </div>
        {/* <Datatable
          title={title}
          loadedData={setData}
          dataColumns={dataColumn}
          className="datatable"
        /> */}
        <div className="footer">
          FEU Alabang - College of Computer Studies and Multimedia Arts
        </div>
      </div>
    </div>
  );
}

export default Home;
