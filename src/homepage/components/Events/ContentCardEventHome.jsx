import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const ContentCardE = React.memo(({ content }) => {
  const [maxLengthTitle, setMaxLengthTitle] = useState(35);
  const [maxLengthDesc, setMaxLengthDesc] = useState(140);

  const title = content?.title || "";
  const description = content?.description || "";
  const thumbnail = content?.thumbnail || "";

  useEffect(() => {
    const updateMaxValues = () => {
      if (window.innerWidth < 640) {
        setMaxLengthTitle(18);
        setMaxLengthDesc(60);
      } else {
        setMaxLengthTitle(35);
        setMaxLengthDesc(140);
      }
    };

    updateMaxValues();
    window.addEventListener("resize", updateMaxValues);

    return () => window.removeEventListener("resize", updateMaxValues);
  }, []);

  const truncatedTitle = useMemo(
    () =>
      title.length > maxLengthTitle
        ? title.substring(0, maxLengthTitle) + "..."
        : title,
    [title, maxLengthTitle]
  );

  const truncatedDescription = useMemo(
    () =>
      description.length > maxLengthDesc
        ? description.substring(0, maxLengthDesc) + "..."
        : description,
    [description, maxLengthDesc]
  );

  return (
    <div className="bg-gray-50 shadow-gray-200 shadow-md  font-khmer  mt-2 w-full sm:w-[350px] h-auto sm:h-[500px] flex flex-col justify-between items-center">
      <div className="h-[200px] sm:h-[300px] w-full">
        <Link to={`/event/${content.id}`}>
          <img
            className="h-full hover:scale-105 transition-transform bg-green-100 text-center shadow-md shadow-gray-500 w-full rounded-t-sm"
            src={thumbnail}
            alt="No Image"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="p-2 mt-4 w-full">
        <p className="font-bold text-lg ml-2 mb-1 h-[30px] font-khmermont break-words text-center">
          {truncatedTitle}
        </p>
        <p className="text-sm text-gray-700 mb-2 p-2 font-khmermont ml-1 h-[78px] break-words text-center">
          <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
        </p>
        <Link to={`/event/${content.id}`} className="flex justify-end">
          <button className="rounded-sm w-24 h-10 mb-2 mr-2 bg-green-400 shadow-sm transform duration-300 hover:scale-x-105 shadow-gray-400 text-white hover:translate-y-[-4px] hover:shadow-md hover:shadow-green-600 hover:bg-green-600 focus:outline-none">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
});

export default ContentCardE;
