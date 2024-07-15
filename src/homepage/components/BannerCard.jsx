import React, { useState, useEffect } from "react";
import { fetchData } from "../api/Api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { InView } from "react-intersection-observer";
import Spinner from "../components/Spinner";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const BannerCard = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await fetchData("slides");
        if (data && data.object && Array.isArray(data.object)) {
          setSlides(data.object);
        } else {
          setError("No banners found in the response");
        }
      } catch (error) {
        setError("Error fetching banners.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="h-24 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center h-12 mt-2 text-red-600 font-mono font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        dynamicHeight={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-transparent hover:bg-slate-300 hover:text-white text-2xl text-gray-500 rounded-full p-2"
            >
              <GrFormPrevious />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-transparent hover:bg-slate-300 hover:text-white text-2xl text-gray-500 rounded-full p-2"
            >
              <MdNavigateNext />
            </button>
          )
        }
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <InView triggerOnce={true} threshold={0.5}>
              {({ inView, ref }) => (
                <img
                  ref={ref}
                  src={slide.imageUrl}
                  alt={slide.name}
                  className={`w-full h-[200px] md:h-[300px] lg:h-[500px] ${
                    inView ? "animate-fadeIn" : ""
                  }`}
                />
              )}
            </InView>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCard;
