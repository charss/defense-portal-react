import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

function DashboardPage() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="100vh">Dashboard Page</div>;
}

export default DashboardPage;
