import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

function SchedulesPage() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Schedules");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Schedules Page</div>;
}

export default SchedulesPage;
