import React, { createContext, useContext, useState, useEffect } from "react";
import { getWindowSizeDeviceString } from "./screen-size-const";

const DeviceContext = createContext<{ device: string }>({ device: "desktop" });

//used to provide context in app depending on width of window
export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [device, setDevice] = useState(
    getWindowSizeDeviceString(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setDevice(getWindowSizeDeviceString(window.innerWidth));
      
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ device }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDeviceContext = () => useContext(DeviceContext);
