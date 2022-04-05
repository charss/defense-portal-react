import { createContext, useContext, useState } from "react";

const TitleContext = createContext();
export const useTitle = () => useContext(TitleContext);

function TitleProvider(props) {
  const [title, setTitle] = useState("DEFAULT TITLE");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {props.children}
    </TitleContext.Provider>
  );
}

export default TitleProvider;
