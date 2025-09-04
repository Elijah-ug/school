import React from "react";
import { History } from "./History";
import { MissionVission } from "./MissionVission";
import { Facilities } from "./Facilities";
import { CoreValues } from "./CoreValues";
import { Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
