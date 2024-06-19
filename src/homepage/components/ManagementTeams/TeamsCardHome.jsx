import React from "react";
import { Link } from "react-router-dom";

const TeamCardHome = ({ member }) => {
  return (
    <div className=" w-[250px] h-[400px] ">
      <Link to={`/teams/${member.id}`}>
        <div className="bg-white shadow-xl drop-shadow-lg rounded-sm overflow-hidden">
          <img
            className="w-[100%] h-[300px] object-cover"
            src={member.photoUrl}
            alt={member.name}
          />
        </div>
      </Link>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{member.name}</h2>
        <p className="text-gray-700 mb-2">{member.description}</p>
      </div>
    </div>
  );
};

export default TeamCardHome;
