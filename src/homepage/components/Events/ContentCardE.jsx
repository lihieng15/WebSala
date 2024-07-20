import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ContentCardE = ({ content }) => {
  const { id, title, description, thumbnail } = content;

  const maxLengthTitle = 34;
  const maxLengthDesc = 320;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div
      ref={ref}
      className={`bg-gray-100  border-green-700 mb-4 mx-auto max-w-3xl rounded-lg overflow-hidden shadow-lg ${
        inView ? "slice-in-left" : "opacity-0"
      }`}
    >
      <div className="md:flex ">
        <div className="md:w-1/3  hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer">
          <Link to={`/event/${content.id}`}>
            <img
              className="w-full h-auto md:h-full object-cover"
              src={thumbnail}
              alt={title}
            />
          </Link>
        </div>
        <div className="p-4 md:w-2/3">
          <h3 className="text-xl font-semibold font-khmermont mb-2">
            {truncatedTitle}
          </h3>
          <div
            className="text-sm font-khmermont h-[120px] text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: truncatedDescription }}
          />
          <div className="text-sm font-khmermont h-[10px] flex text-gray-700  mb-2">
            <p className="font-mono">Published Date : </p>
            <p> {content.createdAt}</p>
          </div>
          <div className="flex text-md justify-end">
            <Link
              to={`/event/${id}`}
              className="rounded-sm w-24 text-center pt-2 h-10 mb-2 mr-2 bg-green-400 shadow-sm transform duration-300 hover:scale-x-105 shadow-gray-400 text-white hover:translate-y-[-4px] hover:shadow-md hover:shadow-green-600 hover:bg-green-600 focus:outline-none"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCardE;
