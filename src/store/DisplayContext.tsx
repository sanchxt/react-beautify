import { createContext, useContext, useState, ReactNode } from "react";

type DisplayContextType = {
  display: boolean;
  setDisplay: (display: boolean) => void;
};

type ColorContextType = {
  color: string;
  setColor: (color: string) => void;
};

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);
const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const DisplayProvider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState(false);
  const [color, setColor] = useState("green");

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      <ColorContext.Provider value={{ color, setColor }}>
        {children}
      </ColorContext.Provider>
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a DisplayProvider");
  }
  return context;
};
