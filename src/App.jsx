import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "components/layout/Layout";
import DashboardPage from "pages/Dashboard/Dashboard";
import GroupsPage from "pages/Groups/Groups";
import PanelistsPage from "pages/Panelists/Panelists";
import StudentsPage from "pages/Students/Students";
import SchedulesPage from "pages/Schedules/Schedules";
import GradesheetsPage from "pages/Gradesheets/Gradesheets";
// import RubricsPage from "./pages/Rubrics/Rubrics";
import RubricsPage from "pages/Rubrics/Rubrics";
import List from "pages/list/List";

function App() {
  return (
    <Layout>
      <Helmet>
        <title>App Title</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/groups/" element={<GroupsPage />} />
        <Route path="/panelists/" element={<PanelistsPage />} />
        <Route path="/students/" element={<StudentsPage />} />
        <Route path="/schedules/" element={<SchedulesPage />} />
        <Route path="/gradesheets/" element={<GradesheetsPage />} />
        <Route path="/rubrics/" element={<RubricsPage />} />
        <Route path="/logout/" />
      </Routes>
    </Layout>
  );
}

export default App;
