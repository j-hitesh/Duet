import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const portfolioData = {
  "3D Designs": [
    { id: 1, img: "" },
    { id: 2, img: "" },
    { id: 3, img: "" },
    { id: 4, img: "" },
  ],

  "Graphic Designs": [
    { id: 1, img: "" },
    { id: 2, img: "" },
    { id: 3, img: "" },
    { id: 4, img: "" },
    { id: 5, img: "" },
    { id: 6, img: "" },
    { id: 7, img: "" },
    { id: 8, img: "" },
    { id: 9, img: "" },
    { id: 10, img: "" },
    { id: 11, img: "" },
    { id: 12, img: "" },
    { id: 13, img: "" },
    { id: 14, img: "" },
  ],

  "Printing Designs": [
    { id: 1, img: "" },
    { id: 2, img: "" },
    { id: 3, img: "" },
    { id: 4, img: "" },
    { id: 5, img: "" },
  ],

  "Web Designs": [
    { id: 1, img: "" },
    { id: 2, img: "" },
    { id: 3, img: "" },
    { id: 4, img: "" },
    { id: 5, img: "" },
    { id: 6, img: "" },
    { id: 7, img: "" },
    { id: 8, img: "" },
    { id: 9, img: "" },
    { id: 10, img: "" },
    { id: 11, img: "" },
    { id: 12, img: "" },
  ],
};

  const filteredItems =
    activeCategory === "All Projects"
      ? Object.values(portfolioData).flat()
      : portfolioData[activeCategory];

  return (
    <PortfolioContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        portfolioData,
        filteredItems,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

// 🔥 Custom Hook
export const usePortfolio = () => useContext(PortfolioContext);
