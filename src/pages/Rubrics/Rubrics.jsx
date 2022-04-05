import { useEffect } from "react";
import { useTitle } from "../../context/TitleContext";

function RubricsPage() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Rubrics");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Rubrics Page</div>;
}

export default RubricsPage;
