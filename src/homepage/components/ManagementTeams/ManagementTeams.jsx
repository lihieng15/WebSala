import React from "react";
import useFetchTeams from "../../hooks/useFetchTeams";
import TeamCardHome from "./TeamsCardHome";

const ManagementTeams = () => {
  const { teamMembers, loading, error } = useFetchTeams();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Error loading team data.
      </div>
    );
  }

  // Determine the team members to display
  const displayedTeamMembers =
    teamMembers.length > 4 ? teamMembers.slice(0, 3) : teamMembers;

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {displayedTeamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <TeamCardHome member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeams;
