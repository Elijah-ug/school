import { Outlet } from "react-router-dom";

import { useState } from "react";

export const Academics = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <Outlet />
    </div>
  );
};
