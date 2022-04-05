import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

function GradesheetsPage() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Gradesheets");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Gradesheet Page</div>;
}

export default GradesheetsPage;
