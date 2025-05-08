import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";

const NewsDetailsCard = ({news}) => {
    const {title,thumbnail_url,details,category_id} =news;
  return (
    <div className=" border border-base-300 rounded-lg mt-5 p-7 space-y-5">
      <img
        className="border border-base-200 rounded-lg"
        src={thumbnail_url}
        alt=""
      />
      <h1 className="text-2xl font-bold leading-11">{title}</h1>
      <p className="text-accent text-base font-normal leading-7 -mt-2">
        {details}
      </p>
      <Link
        to={`/category/${category_id}`}
        className="btn btn-secondary px-5 py-5"
      >
        <GoArrowLeft size={24} />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
