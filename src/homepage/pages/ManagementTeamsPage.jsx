import React, { useState, useEffect } from "react";
import useFetchTeams from "../hooks/useFetchTeams";
import TeamCard from "../components/ManagementTeams/TeamsCard";
import Spinner from "../components/Spinner";

const ManagementTeamsPage = () => {
  const pageSize = 12; // Number of items per page
  const [page, setPage] = useState(1); // Current page number
  const { teamMembers, loading, error, fetchTeams } = useFetchTeams();

  useEffect(() => {
    fetchTeams(page, pageSize);
  }, [page, pageSize, fetchTeams]);

  // Function to fetch data for the next page
  const nextPage = () => {
    setPage(page + 1);
  };

  // Function to fetch data for the previous page
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading && !teamMembers.length) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600">
        Error loading team data.
      </div>
    );
  }

  // Calculate total pages
  const totalPages = Math.ceil(teamMembers.length / pageSize);

  return (
    <div className="w-full min-h-screen bg-green-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-12 text-center">
          Management Teams
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ${
                page <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={prevPage}
              disabled={page <= 1}
            >
              Previous Page
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextPage}
            >
              Next Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagementTeamsPage;
