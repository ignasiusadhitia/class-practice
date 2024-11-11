import PropTypes from "prop-types";
import React from "react";

const HeroCard = ({
  title = "Brand fesyen THENBLANK ciptakan pelung dalam negeri bersama Tokopedia",
  imgUrl = "https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg",
  time,
  text = "text-lg",
  height = "h-96",
  width,
}) => {
  return (
    <div className="relative h-full cursor-pointer">
      <div className={`overflow-hidden ${width} h-full brightness-50`}>
        <img
          src={imgUrl}
          alt=""
          className={`${height} md:h-full w-full object-cover hover:scale-105 transition-all duration-300`}
        />
      </div>
      <div className="absolute bottom-0 p-3 w-3/4">
        <h3
          className={`text-white-50 font-normal text-ellipsis overflow-hidden ... ${text}`}
        >
          {title}...
        </h3>
        {time && (
          <time className="text-white-50 text-xs mt-2">21 March 2024</time>
        )}
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  time: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default HeroCard;
