import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import List from "pages/list/List";
import CardsPage from "pages/cards/CardsPage";
import Home from "pages/home/Home";

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>App Title</title>
      </Helmet>
      <Routes>
        <Route path="/">
          <Route index element={<Home title="Dashboard" />} />
          <Route path="groups">
            <Route index element={<List title="Groups" />} />
          </Route>
          <Route path="panelists">
            <Route index element={<List title="Panelists" />} />
          </Route>
          <Route path="students">
            <Route index element={<List title="Students" />} />
          </Route>
          <Route path="schedules">
            <Route index element={<CardsPage title="Schedules" />} />
          </Route>
          <Route path="gradesheets">
            <Route index element={<List title="Gradesheets" />} />
          </Route>
          <Route path="rubrics">
            <Route index element={<CardsPage title="Rubrics" />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
