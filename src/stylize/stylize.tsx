import { useEffect, useState } from "react";
import { useDeviceContext } from "../context/device-context/device-context";
import { isDesktopStirng, isMobileString, isTabletString } from "../context/device-context/screen-size-const";


const Stylize = (props: any) => {

  //get device string from Device Context
  const {device} = useDeviceContext();
  //get any styles
  const styles = props.styles || undefined;

  //TODO: replace all objects from anything within this <Stylize>
  //TODO: to correspoding style (mobile, tablet, desktop)
  if (styles){
    if (device === isMobileString) return; //do stuff
    else if (device === isTabletString) return; //do stuff
    else if (device === isDesktopStirng) return; //do stuff
  }
};

export default Stylize;
