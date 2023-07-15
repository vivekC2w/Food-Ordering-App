import RestaurantCard from "../Components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //State Variable - Super Powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch => super power JS Engine has
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //optional chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            //setListOfRestaurant
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* RestaurantCard */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
