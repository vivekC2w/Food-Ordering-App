import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const [expanded, setExpanded] = useState(false);

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData;
  return (
    <div className="bg-gray-100 m-4 p-4 w-[250px] rounded-t-lg transition-transform duration-300 ease hover:transform translate-y-[-5px] hover:shadow-md hover:bg-gray-200">
      <img
        className="w-full h-200 object-cover rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-2">
        <h3 className="text-20 font-bold text-gray-700 mb-4">{name}</h3>
        <h5
          className={`text-14 text-gray-700 ${
            expanded ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {cuisines.join(", ")}
        </h5>
        <div className="flex items-center text-yellow-400">
          <FontAwesomeIcon icon={faStar} className="mr-4" />
          {avgRating}
        </div>
        <h5 className="text-10 font-bold text-gray-700">
          {deliveryTime} Minutes
        </h5>
      </div>
    </div>
  );
};

//Higher order Component

//input - RestaurantCard => Output will be RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <label
          className="absolute bg-black text-white m-2 p-2 rounded-lg top-0.5 left-2"
          style={{ zIndex: 1 }}
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
