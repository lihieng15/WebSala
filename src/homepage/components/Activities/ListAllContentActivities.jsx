import React, { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../api/Api";
import ContentCardA from "../Activities/ContentCardA";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import HeaderandLineinHomePage from "../HeaderandLineinHomePage";

const ListAllContentEvents = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const articleName = "Activities";

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetchContentsByArtName(articleName);

        if (response && Array.isArray(response.object)) {
          const sortedContents = response.object.sort(
            (a, b) => new Date(b.id) - new Date(a.id)
          );
          setContents(sortedContents);
        } else {
          console.error("No articles found for the specified category");
          setContents([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
        setLoading(false);
      }
    };

    fetchContents();
  }, [articleName]);

  const totalPages = Math.ceil(contents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = contents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderandLineinHomePage title="ALL ACTIVITIES " />
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-gray-600">
            <Spinner />
          </div>
        ) : currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {currentItems.map((content) => (
              <div key={content.id} className="px-2">
                <ContentCardA content={content} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No School Events found.</p>
        )}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ListAllContentEvents;
