import PropTypes from "prop-types";
import React from "react";

const ArticleCard = ({
  title = "Sambut Hari Pelanggan Nasional 2023, Intip Inovasi Customer Experience di Tokopedia",
  label = "Label",
  time = "6 October 2023",
  imgUrl = "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
}) => {
  return (
    <div>
      <div className="relative cursor-pointer">
        <img
          src={imgUrl}
          alt="siaran-pers"
          className="rounded object-cover h-52 md:h-32 w-full"
        />
        <div className="absolute m-3 bottom-0 bg-black-700 h-5 flex justify-center items-center rounded opacity-80 ">
          <span className="text-xs text-white-50 px-1 font-bold ">{label}</span>
        </div>
      </div>
      <h4 className="text-black-700 hover:text-secondary-500 cursor-pointer text-sm font-bold mt-4 text-ellipsis overflow-hidden ... ">
        {title}...
      </h4>
      <time className="text-xs text-neutral-300">{time}</time>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default ArticleCard;
