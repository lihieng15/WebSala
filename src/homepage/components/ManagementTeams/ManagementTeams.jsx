import React from "react";
import GetTeamMembers from "./GetTeamsMember";

import HeaderandLineinHomePage from "../HeaderandLineinHomePage";
const ManagementTeams = () => {
  return (
    <div className="bg-white ">
      <HeaderandLineinHomePage title={`MANAGEMENT TEAMS`} />
      <div className="flex justify-center  items-center">
        <GetTeamMembers />
      </div>
    </div>
  );
};

export default ManagementTeams;
