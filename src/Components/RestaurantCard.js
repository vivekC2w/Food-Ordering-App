import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-content">
        <h3 className="res-card-title">{name}</h3>
        <h5 className="res-card-description">{cuisines.join(", ")}</h5>
        <div className="res-card-rating">
          <FontAwesomeIcon icon={faStar} />
          {avgRating}
        </div>
        <h5 className="res-card-delivery-time">{deliveryTime} Minutes</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
