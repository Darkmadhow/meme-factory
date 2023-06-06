import { createContext, useState } from "react";

export const MemeContext = createContext({});

const MemeContextProvider = ({ children }) => {
  const [memeImage, setMemeImage] = useState([]);

  return (
    <MemeContext.Provider value={{ memeImage, setMemeImage }}>
      {children}
    </MemeContext.Provider>
  );
};

export default MemeContextProvider;
