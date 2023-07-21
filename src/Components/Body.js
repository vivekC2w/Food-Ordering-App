import RestaurantCard from "../Components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State Variable - Super Powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch => super power JS Engine has
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    try {
      const json = await data.json();
      //optional chaining
      setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log("Error fetching data:", error);
      // Handle the error state or display an error message
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  //Conditional Rendering
  return listOfRestaurants && listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //SearchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            //setListOfRestaurant
            setListOfRestaurants(filteredList);
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* RestaurantCard */}
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
